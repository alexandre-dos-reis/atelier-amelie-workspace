import { faker } from '@faker-js/faker';
import slugify from 'slugify';
import { PrismaClient } from '@prisma/client';

export async function gallerySeeds(prisma: PrismaClient) {
  const catsName = [
    'Calligraphies',
    'Enluminures',
    'Marques-pages',
    'Evènements',
    'Autres techniques',
  ];

  await prisma.category.createMany({
    data: catsName.map((c, i) => ({
      name: c,
      disposition: i + 1,
      slug: slugify(c, { lower: true }),
      description: faker.random.words(20),
      showInGallery: true,
    })),
  });

  const categories = await prisma.category.findMany();

  for (let i = 0; i < 50; i++) {
    const name = faker.random.words();

    await prisma.artwork.create({
      data: {
        filename: 'Manet.jpg',
        name,
        slug: slugify(name, { lower: true }),
        description: faker.random.words(20),
        showInGallery: faker.helpers.arrayElement([true, false]),
        categories: {
          connect: faker.helpers.arrayElements(categories.map((c) => ({ id: c.id }))),
        },
      },
    });
  }
}
