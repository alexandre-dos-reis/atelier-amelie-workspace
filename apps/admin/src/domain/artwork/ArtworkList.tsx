import { Link } from '@tanstack/react-router';
import { RouterOutput, trpc } from '@app/admin/utils/trpc';
import MRTable, { MRT_ColumnDef } from 'material-react-table';
import { PaginationState, SortingState } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import {} from '@mui/material';

export const ArtworkList = () => {
  // https://github.com/TanStack/table/blob/main/examples/react/mui-pagination/src/main.tsx

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  const { data, isLoading } = trpc.artwork.listAll.useQuery(
    {
      skip: pagination.pageIndex * pagination.pageSize,
      take: pagination.pageSize,
      sorting: sorting[0],
    },
    {
      keepPreviousData: true,
    }
  );
  console.log(data, sorting);

  const columns = useMemo<MRT_ColumnDef<RouterOutput['artwork']['listAll']['artworks'][number]>[]>(
    () => [
      {
        header: 'Image',
        accessorKey: 'filename',
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        header: 'Nom',
        accessorKey: 'name',
      },
      {
        header: 'Galerie ?',
        accessorKey: 'showInGallery',
        accessorFn: (r) => <div>{r.showInGallery ? 'oui' : 'non'}</div>,
      },
      {
        header: '# Produits',
        accessorKey: '_count.products',
      },
      {
        header: 'Catégories',
        accessorKey: 'Artwork_Categories',
        accessorFn: (r) => (
          <ul>
            {r.Artwork_Categories.map((ac) => (
              <li key={ac.category.id}>{ac.category.name}</li>
            ))}
          </ul>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Link to="/artworks/create">Create Artwork</Link>
      <MRTable
        columns={columns}
        data={data?.artworks || []}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        state={{ pagination, sorting, isLoading }}
        rowCount={data?.total}
        manualPagination
        manualSorting
        enableMultiSort={false}
      />
    </>
  );
};
