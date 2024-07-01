import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  //prisma client queries
  let res = await prisma.post.findMany({
    take: 3,
    skip: 2,
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
