import { Outlet } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';
import { CategoryCreate } from './CategoryCreate';
import { CategoryEdit } from './CategoryEdit';
import { CategoryList } from './CategoryList';

const categoryRootRoute = rootRoute.createRoute({
  path: 'categories',
  component: () => (
    <>
      <div>This is the category section</div>
      <Outlet />
    </>
  ),
});

const categoryListRoute = categoryRootRoute.createRoute({
  path: '/',
  component: CategoryList,
});

const categoryCreateRoute = categoryRootRoute.createRoute({
  path: 'create',
  component: CategoryCreate,
});

const categoryEditRoute = categoryRootRoute.createRoute({
  path: 'edit/$id',
  component: CategoryEdit,
});

export const categoryRouteConfig = categoryRootRoute.addChildren([
  categoryListRoute,
  categoryCreateRoute,
  categoryEditRoute,
]);
