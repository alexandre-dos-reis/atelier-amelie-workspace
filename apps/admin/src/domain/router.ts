import { createReactRouter } from '@tanstack/react-router';
import { artworkRouteConfig } from './artwork';
import { categoryRouteConfig } from './category';
import { homeRouteConfig } from './homeRoute';
import { rootRoute } from './rootRoute';

const routeConfig = rootRoute.addChildren([
  homeRouteConfig,
  artworkRouteConfig,
  categoryRouteConfig,
]);

export const router = createReactRouter({ routeConfig });

declare module '@tanstack/react-router' {
  export interface RegisterRouter {
    router: typeof router;
  }
}
