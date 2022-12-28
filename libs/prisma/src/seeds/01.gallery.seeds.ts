import { faker } from '@faker-js/faker';
import slugify from 'slugify';
import { PrismaClient } from '@lib/prisma';

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
      },
    });
  }

  const artworks = await prisma.artwork.findMany();

  await prisma.artwork_Category.createMany({
    data: Array.from({
      length: Math.floor((artworks.length * categories.length) / 2)
    }).map((_) => ({
      artwork_id: faker.helpers.arrayElement(artworks).id,
      category_id: faker.helpers.arrayElement(categories).id,
    })),
  });
}
