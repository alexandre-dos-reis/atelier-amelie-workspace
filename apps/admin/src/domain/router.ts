import { createReactRouter } from '@tanstack/react-router';
import {
  artworkCreateRoute,
  artworkEditRoute,
  artworkListRoute,
  artworkRootRoute,
} from './artwork';
import {
  categoryCreateRoute,
  categoryEditRoute,
  categoryListRoute,
  categoryRootRoute,
} from './category';
import { homeRoute } from './homeRoute';
import { rootRoute } from './rootRoute';

/**
 * STARTING ROUTES DEFINITION
 */

const routeConfig = rootRoute.addChildren([
  homeRoute,
  artworkRootRoute.addChildren([artworkCreateRoute, artworkEditRoute, artworkListRoute]),
  categoryRootRoute.addChildren([categoryListRoute, categoryEditRoute, categoryCreateRoute]),
]);

/**
 * ENDING ROUTES DEFINITION
 */

export const router = createReactRouter({ routeConfig });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}
