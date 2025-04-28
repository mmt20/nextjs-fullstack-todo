import { faker } from "@faker-js/faker";
import { PrismaClient } from "./app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ** Genrate fake dat for user model **
  // await prisma.user.createMany({
  //   data: Array.from({ length: 10 }, () => ({
  //     email: faker.internet.email(),
  //     name: faker.internet.username(),
  //     address: {
  //       street: faker.location.street(),
  //       city: faker.location.city(),
  //       state: faker.location.state(),
  //       zip: faker.location.zipCode(),
  //     },
  //   })),
  // });

  // ** Genrate fake dat for todo model **
  await prisma.todo.createMany({
    data: Array.from({ length: 10 }, () => ({
      title: faker.lorem.sentence({ min: 2, max: 5 }),
      body: faker.lorem.paragraph({ min: 1, max: 15 }),
      completed: faker.datatype.boolean(),
      createdAt: faker.date.past(),
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
