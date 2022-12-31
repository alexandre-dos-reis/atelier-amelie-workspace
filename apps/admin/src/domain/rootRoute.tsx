import { createRouteConfig, Link, Outlet } from '@tanstack/react-router';
import { Sidebar, Topbar } from '@app/admin/components/layout';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../config/theme';

export const rootRoute = createRouteConfig({
  component: () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Box sx={{ mx: 2, bgcolor: colors.primary[400] }}>
            <Outlet />
          </Box>
        </main>
      </div>
    );
  },
});
