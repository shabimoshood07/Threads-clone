import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const res = await prisma.posts.delete({
    where: {
      id: Number(id),
    },
  });
  return res;
});
