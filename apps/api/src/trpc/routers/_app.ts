import { router } from '../init';
import { artworkRouter } from './artworks.router';
import { userRouter } from './users.router';

export const appRouter = router({
  user: userRouter,
  artwork: artworkRouter,
});

export type AppRouter = typeof appRouter;
