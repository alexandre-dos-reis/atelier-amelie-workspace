import { z } from 'zod';
import { publicProcedure, router } from '../init';

type User = {
  id: string;
  name?: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const userRouter = router({
  getUserById: publicProcedure.input(z.string()).query(({ input }) => {
    return users[input];
  }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        bio: z.string().max(142).optional(),
      })
    )
    .mutation(({ input }) => {
      const id = Date.now().toString();
      const user: User = { id, ...input };
      users[user.id] = user;
      return user;
    }),
});
