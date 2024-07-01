import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  //prisma client queries
  const users = await prisma.user.findMany({});
  console.log(users);

  const user = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      posts: true,
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    console.log("done with the query");

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
