import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  //prisma client queries
  let res = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "jukebox.com",
      },
      posts: {
        some: {
          published: true,
        },
      },
    },
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });
  console.log(res);
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
