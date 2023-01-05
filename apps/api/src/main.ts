import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from '@app/api/trpc/context';
import { appRouter } from '../src/trpc/routers/_app';
import cors from '@fastify/cors';

const server = fastify({
  maxParamLength: 5000,
});

server.register(cors, {
  origin: '*',
});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
});

const port = parseInt(process.env.NX_API_PORT);

(async () => {
  try {
    console.log(`Api running on port ${port}`);
    await server.listen({ port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
