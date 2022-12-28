import { Admin, Resource, ListGuesser } from 'react-admin';
import { useHasuraProvider } from './hooks/useHasuraProvider';

export const App = () => {
  const hasuraProvider = useHasuraProvider();

  if (!hasuraProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={hasuraProvider}>
      <Resource name="Artwork" list={ListGuesser} />
      <Resource name="Category" list={ListGuesser} />
      <Resource name="Artwork_Category" list={ListGuesser} />
      <Resource name="Product" list={ListGuesser} />
      <Resource name="ProductImage" list={ListGuesser} />
      <Resource name="ShopCategory" list={ListGuesser} />
      <Resource name="Purchase" list={ListGuesser} />
      <Resource name="PurchaseItem" list={ListGuesser} />
      <Resource name="Address" list={ListGuesser} />
      <Resource name="ShippingCost" list={ListGuesser} />
      <Resource name="AdminVariable" list={ListGuesser} />
    </Admin>
  );
};
