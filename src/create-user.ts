import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  //prisma client queries
  await prisma.user.create({
    data: {
      email: "kamado@juicebox.com",
      name: "Zenitsu Himejima",
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
