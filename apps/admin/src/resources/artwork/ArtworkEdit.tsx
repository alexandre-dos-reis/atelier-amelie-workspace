import { Edit, useDataGrid, DataGrid } from '@pankod/refine-mui';
import { HttpError, useResource } from '@pankod/refine-core';
import { useForm } from '@pankod/refine-react-hook-form';
import { Artwork, Product } from '@lib/prisma';
import { BooleanInput } from '@app/admin/components/Form/CheckboxInput';
import { TextInput } from '@app/admin/components/Form/TextInput';
import { GridContainer } from '@app/admin/components/Mui/GridContainer';
import { SlugInput } from '@app/admin/components/Form/SlugInput';
import { useFieldCopy } from '@app/admin/hooks/useFieldCopy';
import { Tab } from '@app/admin/components/Tabs/Tab';
import { Tabs } from '@app/admin/components/Tabs/Tabs';
import { Form } from '@app/admin/components/Form/Form';
import { UploadWidget } from '@app/admin/components/cloudinary/UploadWidget';
import { useEffect, useState } from 'react';
import Image from 'mui-image';
import { getColumns } from '@app/admin/components/List/getColumns';

interface ArtworkEdit extends Artwork {}

interface ArtworkWithProduct extends ArtworkEdit {
  Product: Array<Product>;
}

export const ArtworkEdit = () => {
  const f = useForm<Artwork, HttpError, ArtworkEdit>({
    mode: 'onChange',
  });

  const { disabled, setDisabled } = useFieldCopy(f.watch, f.setValue, 'name', 'slug');

  const [filename, setFilename] = useState<string | undefined>(f.getValues('filename'));

  const onUploadCallback = (url: string) => {
    f.setValue('filename', url);
    setFilename(url);
  };

  useEffect(() => {
    setFilename(f.getValues('filename'));
  }, []);

  const { id } = useResource({ resourceNameOrRouteName: 'Artwork' });

  const { dataGridProps } = useDataGrid({
    resource: 'Product',
    metaData: {
      select: 'id, name',
      eq: ['artworkId', id],
    },
  });

  const columns = getColumns<Product>([
    {
      field: 'name',
      headerName: 'Nom',
      maxWidth: 250,
      headerAlign: 'center',
      flex: 1,
      renderCell: (p) => p.row.name,
    },
  ]);

  return (
    <Edit isLoading={f.refineCore.formLoading} saveButtonProps={f.saveButtonProps}>
      <Tabs>
        <Tab label="Détails">
          <Form>
            <GridContainer>
              <TextInput
                control={f.control}
                label="Nom"
                rules={{ required: 'Le nom est requis !' }}
                name="name"
              />
              <SlugInput
                control={f.control}
                label="Slug"
                rules={{ required: 'Le slug est requis !' }}
                name="slug"
                disabled={disabled}
                onClickHandler={() => setDisabled((v) => !v)}
              />
            </GridContainer>
            <TextInput
              control={f.control}
              label="Description"
              rules={{ required: 'La description est requise !' }}
              name="description"
              multiline
            />
            <TextInput control={f.control} label="Date de création de l'oeuvre" name="createdAt" />
            <GridContainer>
              <BooleanInput
                control={f.control}
                name="showInGallery"
                label="Afficher dans la galerie ?"
              />
              <BooleanInput
                control={f.control}
                name="showInPortfolio"
                label="Afficher dans le portfolio ?"
              />
            </GridContainer>
          </Form>
        </Tab>
        <Tab label="Image">
          <UploadWidget onUploadCallback={onUploadCallback} />
          <input {...f.register('filename')} type="hidden" />
          {filename ? (
            <Image src={`https://res.cloudinary.com/djccfwbjb/image/upload/${filename}`} />
          ) : null}
        </Tab>
        <Tab label={`Produits (${dataGridProps.rowCount || 0})`}>
          <div style={{ height: 300, width: '100%' }}>
            <DataGrid {...dataGridProps} columns={columns} checkboxSelection autoHeight />
          </div>
        </Tab>
      </Tabs>
    </Edit>
  );
};
