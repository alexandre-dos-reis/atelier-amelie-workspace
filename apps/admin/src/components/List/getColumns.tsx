import {
  DeleteButton,
  EditButton,
  GridColumns,
  GridEnrichedColDef,
  Stack,
} from "@pankod/refine-mui";

export const getColumns = <T extends { id: string | number }>(
  columns: Array<GridEnrichedColDef<T>>
): GridColumns<T> => [
  ...columns,
  {
    field: "Actions",
    headerName: "",
    maxWidth: 90,
    sortable: false,
    flex: 1,
    filterable: false,
    hideable: false,
    renderCell: function render(p) {
      return (
        <Stack direction="row" spacing={1}>
          <EditButton hideText recordItemId={p.row.id} />
          <DeleteButton hideText recordItemId={p.row.id} />
        </Stack>
      );
    },
  },
];
