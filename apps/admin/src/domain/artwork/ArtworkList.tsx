import { Link } from '@tanstack/react-router';

export const ArtworkList = () => {
  return (
    <>
      <Link to="/artworks/create">Create Artwork</Link>
      <ul>
        <li>
          <Link to="/artworks/edit/$id" params={{ id: '1' }}>
            1
          </Link>
        </li>
        <li>
          <Link to="/artworks/edit/$id" params={{ id: '2' }}>
            2
          </Link>
        </li>
        <li>
          <Link to="/artworks/edit/$id" params={{ id: '3' }}>
            3
          </Link>
        </li>
        <li>
          <Link to="/artworks/edit/$id" params={{ id: '4' }}>
            4
          </Link>
        </li>
      </ul>
    </>
  );
};
