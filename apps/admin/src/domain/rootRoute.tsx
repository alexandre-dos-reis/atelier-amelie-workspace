import { createRouteConfig, Link, Outlet } from "@tanstack/react-router";

export const rootRoute = createRouteConfig({
    component: () => (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/artworks">Artworks</Link>
          <Link to="/categories">Categories</Link>
        </div>
        <hr />
        <Outlet />
      </>
    ),
  });