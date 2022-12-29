import { Link } from '@tanstack/react-router';

export const CategoryList = () => {
  return (
    <>
      <Link to="/categories/create">Create Category</Link>
      <ul>
        <li>
          <Link to="/categories/edit/$id" params={{ id: '1' }}>
            1
          </Link>
        </li>
        <li>
          <Link to="/categories/edit/$id" params={{ id: '2' }}>
            2
          </Link>
        </li>
        <li>
          <Link to="/categories/edit/$id" params={{ id: '3' }}>
            3
          </Link>
        </li>
        <li>
          <Link to="/categories/edit/$id" params={{ id: '4' }}>
            4
          </Link>
        </li>
      </ul>
    </>
  );
};
