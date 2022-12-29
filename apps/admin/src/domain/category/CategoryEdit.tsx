import { useParams } from '@tanstack/react-router';

export const CategoryEdit = () => {
  const { id } = useParams();
  return <div>You are editing Category {id}</div>;
};
