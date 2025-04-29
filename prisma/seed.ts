import { faker } from "@faker-js/faker";
import { PrismaClient } from "./app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ** Genrate fake dat for todo model **
  // await prisma.todo.createMany({
  //   data: Array.from({ length: 10 }, () => ({
  //     title: faker.lorem.sentence({ min: 2, max: 6 }),
  //     body: faker.lorem.paragraph({ min: 1, max: 15 }),
  //     completed: faker.datatype.boolean(),
  //     createdAt: faker.date.past(),
  //     user_Id: "user_Id after login",
  //   })),
  // });
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
