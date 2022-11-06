import { router, protectedProcedure } from "../trpc";

export const todoRouter = router({
  createRandom: protectedProcedure.mutation(({ ctx }) => {
    return ctx.prisma.todo.create({
      data: {
        userId: ctx.session.user.id,
        title: "Asd",
        description: "qwe qwe qwe",
      },
    });
  }),
  getAllByUser: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany({ where: { userId: ctx.session.user.id } });
  }),
});
