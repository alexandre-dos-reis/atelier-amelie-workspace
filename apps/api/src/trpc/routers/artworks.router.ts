import { z } from 'zod';
import { publicProcedure, router } from '../init';

export const artworkRouter = router({
  listAll: publicProcedure.query(() => 'ok'),
});
