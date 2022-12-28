import { useState, useEffect } from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import { DataProvider } from 'react-admin';

export const useHasuraProvider = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: 'http://localhost:8888/v1/graphql' },
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  return dataProvider;
};
