import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  //prisma client queries
  await prisma.post.create({
    data: {
      title: "The Scorpian Clutch",
      content: "Dutch Fisheries Yacht",
      published: false,
      authorId: 4,
    },
  });
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
