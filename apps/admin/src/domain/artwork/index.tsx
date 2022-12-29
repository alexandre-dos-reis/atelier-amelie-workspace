import { Outlet } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';
import { ArtworkCreate } from './ArtworkCreate';
import { ArtworkEdit } from './ArtworkEdit';
import { ArtworkList } from './ArtworkList';

export const artworkRootRoute = rootRoute.createRoute({
  path: 'artworks',
  component: () => (
    <>
      <div>This is the artworks section</div>
      <Outlet />
    </>
  ),
});

export const artworkListRoute = artworkRootRoute.createRoute({
  path: '/',
  component: ArtworkList,
});

export const artworkCreateRoute = artworkRootRoute.createRoute({
  path: 'create',
  component: ArtworkCreate,
});

export const artworkEditRoute = artworkRootRoute.createRoute({
  path: 'edit/$id',
  component: ArtworkEdit,
});
