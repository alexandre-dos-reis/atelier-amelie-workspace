import { Stack, TagField } from '@pankod/refine-mui';
import { colourOptions } from '@app/admin/config/colors-option';

interface Props {
  values: {
    id: string | number;
    value: string | number;
  }[];
  enableColors?: boolean;
}

export const TagsField = ({ values, enableColors = false }: Props) => (
  <Stack direction="row" spacing={0.5} sx={{ overflowX: 'auto', width: '100%' }}>
    {values.map((v, i) => (
      <TagField
        key={v.id}
        value={v.value}
        sx={{
          fontSize: 12,
          color: enableColors ? colourOptions[i] : 'inherit',
          bgcolor: 'grey.100',
        }}
      />
    ))}
  </Stack>
);
