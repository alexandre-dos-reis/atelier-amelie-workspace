import { useParams } from '@tanstack/react-router';

export const ArtworkEdit = () => {
  const { id } = useParams();
  return <div>You are editing artwork {id}</div>;
};
