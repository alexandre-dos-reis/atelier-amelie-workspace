import { Outlet } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';
import { ArtworkCreate } from './ArtworkCreate';
import { ArtworkEdit } from './ArtworkEdit';
import { ArtworkList } from './ArtworkList';

const artworkRootRoute = rootRoute.createRoute({
  path: 'artworks',
  component: () => (
    <>
      <div>This is the artworks section</div>
      <Outlet />
    </>
  ),
});

const artworkListRoute = artworkRootRoute.createRoute({
  path: '/',
  component: ArtworkList,
});

const artworkCreateRoute = artworkRootRoute.createRoute({
  path: 'create',
  component: ArtworkCreate,
});

const artworkEditRoute = artworkRootRoute.createRoute({
  path: 'edit/$id',
  component: ArtworkEdit,
});

export const artworkRouteConfig = artworkRootRoute.addChildren([
  artworkListRoute,
  artworkCreateRoute,
  artworkEditRoute,
]);
