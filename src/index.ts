/** @format */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);

  //   const postUser = await prisma.user.create({
  //     data: {
  //       email: 'muhammadjiku364@gmail.com',
  //       name: 'muhammad-jiku',
  //       age: 25,
  //     },
  //   });
  //   console.log(postUser);
}

main();
