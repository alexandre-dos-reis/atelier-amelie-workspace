import { Refine } from '@pankod/refine-core';
import {
  Layout,
  ErrorComponent,
  ReadyPage,
  LightTheme,
  CssBaseline,
  ThemeProvider,
  GlobalStyles,
  RefineSnackbarProvider,
  notificationProvider,
} from '@pankod/refine-mui';
import routerProvider from '@pankod/refine-react-router-v6';
import dataProvider, { GraphQLClient } from '@pankod/refine-hasura';
import { FC } from 'react';
import { artworkResource } from './resources/artwork';

const API_URL = 'http://localhost:8888/v1/graphql';

const client = new GraphQLClient(API_URL);

export const App: FC = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(client)}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[artworkResource]}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
};
