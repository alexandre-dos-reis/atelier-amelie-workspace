import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from '@app/api/trpc/context';
import { appRouter } from '../src/trpc/routers/_app';

const server = fastify({
  maxParamLength: 5000,
});

const port = parseInt(process.env.NX_API_PORT) || 4000;
const trpcPrefix = process.env.NX_TRPC_PREFIX || '/trpc';

server.register(fastifyTRPCPlugin, {
  prefix: trpcPrefix,
  trpcOptions: { router: appRouter, createContext },
});

(async () => {
  try {
    console.log(`Api running on port ${port}`);
    await server.listen({ port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
