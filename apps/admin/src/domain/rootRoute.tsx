import { createRouteConfig, Link, Outlet } from '@tanstack/react-router';
import { Sidebar, Topbar } from '@app/admin/components/layout';

export const rootRoute = createRouteConfig({
  component: () => (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
    // <>
    //   <div>
    //     <Link to="/">Home</Link>
    //     <Link to="/artworks">Artworks</Link>
    //     <Link to="/categories">Categories</Link>
    //   </div>
    //   <hr />
    //   <Outlet />
    // </>
  ),
});
