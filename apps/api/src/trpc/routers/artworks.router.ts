import { z } from 'zod';
import { publicProcedure, router } from '../init';

export const artworkRouter = router({
  listAll: publicProcedure
    .input(
      z
        .object({
          take: z.number().int().gte(5).lte(100).default(10),
          skip: z.number().int().gte(0).default(0),
          sorting: z
            .object({
              id: z.string().default('name'),
              desc: z.boolean().default(false),
            })
            .default({}),
        })
        .default({})
    )
    .query(async ({ ctx, input }) => {

      // const sortingKeys: Record<string, unknown> = {
      //   Artwork_Categories: {},
      //   '_count.products': {
      //     products: {
      //       _count: input.sorting.desc ? 'desc' : 'asc',
      //     },
      //     default: {
      //       [input.sorting.id]: input.sorting.desc ? 'desc' : 'asc',
      //     },
      //   },
      // };

      const [artworks, total] = await prisma.$transaction([
        ctx.prisma.artwork.findMany({
          take: input.take,
          skip: input.skip,
          orderBy:
            input?.sorting?.id === '_count.products'
              ? {
                  products: {
                    _count: input.sorting.desc ? 'desc' : 'asc',
                  },
                }
              : {
                  [input.sorting.id]: input.sorting.desc ? 'desc' : 'asc',
                },
          include: {
            Artwork_Categories: {
              include: {
                category: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
            _count: {
              select: {
                products: true,
              },
            },
          },
        }),
        ctx.prisma.artwork.count(),
      ]);

      return {
        artworks,
        total,
      };
    }),
});
