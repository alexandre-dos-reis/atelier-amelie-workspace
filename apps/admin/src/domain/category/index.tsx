import { Outlet } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';
import { CategoryCreate } from './CategoryCreate';
import { CategoryEdit } from './CategoryEdit';
import { CategoryList } from './CategoryList';

export const categoryRootRoute = rootRoute.createRoute({
  path: 'categories',
  component: () => (
    <>
      <div>This is the category section</div>
      <Outlet />
    </>
  ),
});

export const categoryListRoute = categoryRootRoute.createRoute({
  path: '/',
  component: CategoryList,
});

export const categoryCreateRoute = categoryRootRoute.createRoute({
  path: 'create',
  component: CategoryCreate,
});

export const categoryEditRoute = categoryRootRoute.createRoute({
  path: 'edit/$id',
  component: CategoryEdit,
});
