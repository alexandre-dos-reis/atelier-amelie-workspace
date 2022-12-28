import { TagsField } from '@app/admin/components/Fields/TagsField';
import { getColumns } from '@app/admin/components/List/getColumns';
import { Artwork, Category, Product } from '@lib/prisma';
import { Image } from 'mui-image';
import { Link } from '@app/admin/components/Link';
import { CountField } from '@app/admin/components/Fields/CountField';
import { useDataGrid, List, NumberField, DataGrid } from '@pankod/refine-mui';
import { BooleanField } from '@app/admin/components/Fields/BooleanField';

interface ArtworkItem
  extends Pick<
    Artwork,
    'id' | 'name' | 'showInGallery' | 'filename' | 'watermarkedFilename' | 'updatedAt'
  > {
  Artwork_Categories: Array<{ Category: Pick<Category, 'id' | 'name' | 'slug' | 'disposition'> }>;
  Products: Array<Pick<Product, 'id'>>;
}

const columns = getColumns<ArtworkItem>([
  {
    field: 'filename',
    headerName: 'Image',
    maxWidth: 100,
    flex: 1,
    headerAlign: 'center',
    renderCell: (p) =>
      p.row.filename ? (
        <Image src={`https://res.cloudinary.com/djccfwbjb/image/upload/${p.row.filename}`} />
      ) : (
        <Image src={`https://picsum.photos/100/50/?random=${p.row.id}`} />
      ),
  },
  {
    field: 'name',
    headerName: 'Nom',
    maxWidth: 250,
    headerAlign: 'center',
    flex: 1,
    renderCell: (p) => (
      <Link action="edit" propId={p.row.id}>
        {p.row.name}
      </Link>
    ),
  },
  {
    field: 'watermarked',
    headerName: 'Filigrane ?',
    flex: 1,
    maxWidth: 100,
    headerAlign: 'center',
    align: 'center',
    renderCell: (p) => <BooleanField value={p.row.watermarkedFilename ? true : false} />,
  },
  {
    field: 'showInGallery',
    type: 'boolean',
    headerName: 'Galerie ?',
    flex: 1,
    maxWidth: 80,
    headerAlign: 'center',
    align: 'center',
    renderCell: (p) => <BooleanField value={p.row.showInGallery} />,
  },
  {
    field: 'Products',
    type: 'number',
    headerName: '# Produits',
    maxWidth: 95,
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    // sortComparator: (_v1, _v2, cell1: Array<Product>, cell2: Array<Product>) => cell1.length > cell2.length ? -1 : 1,
    renderCell: (p) => <CountField value={p.row.Products.length} fontSize="1rem" redAtZero />,
  },
  {
    field: 'Category',
    headerName: 'Catégories',
    sortable: false,
    filterable: false,
    flex: 1,
    headerAlign: 'center',
    maxWidth: 633,
    renderCell: (p) => (
      <TagsField
        enableColors
        values={p.row.Artwork_Categories.map((ac) => ({ id: ac.Category.id, value: ac.Category.name }))}
      />
    ),
  },
]);

export const ArtworkList: React.FC = () => {
  const { dataGridProps } = useDataGrid<ArtworkItem>({
    metaData: {
      fields: [
        'id',
        'filename',
        'name',
        'watermarkedFilename',
        'showInGallery',
        {
          Products: ['id'],
        },
        {
          Artwork_Categories: [
            {
              Category: ['id', 'name'],
            },
          ],
        },
      ],
    },
  });

  console.log(dataGridProps.rows);

  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </List>
  );
};
