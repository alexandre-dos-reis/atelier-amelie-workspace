import { rootRoute } from './rootRoute';

export const homeRoute = rootRoute.createRoute({
  path: '/',
  component: () => <div>home route</div>,
});
