import { RouterProvider } from '@tanstack/react-router';
import { router } from './domain/router';

export function App() {
  return <RouterProvider router={router} />;
}
