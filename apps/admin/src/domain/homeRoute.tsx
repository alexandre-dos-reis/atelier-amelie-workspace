import { rootRoute } from './rootRoute';

export const homeRouteConfig = rootRoute.createRoute({
  path: '/',
  component: () => <div>home route</div>,
});
