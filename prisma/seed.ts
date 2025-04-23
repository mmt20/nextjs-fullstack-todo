import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "prisma@prisma.com",
      name: "Prisma",
      address: {
        street: "123 Main St",
        city: "Prisma City",
        state: "CA",
        zip: "12345",
      },
    },
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
