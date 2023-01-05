import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import { prisma } from '../db/client';

export function createContext(opts: CreateFastifyContextOptions) {
  return {
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
