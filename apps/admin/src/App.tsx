import { RouterProvider } from '@tanstack/react-router';
import { ColorModeContext, useMode } from './config/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { router } from './domain/router';
import { TrpcQueryProvider } from './components/TrpcQuery';

export function App() {
  const [theme, colorMode] = useMode();
  return (
    <TrpcQueryProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </TrpcQueryProvider>
  );
}
