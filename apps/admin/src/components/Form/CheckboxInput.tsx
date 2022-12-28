import { Checkbox, FormControlLabel, FormGroup } from "@pankod/refine-mui";
import { Controller, ControllerProps, FieldValues } from "@pankod/refine-react-hook-form";
import { GridItem } from "../Mui/GridItem";

export const BooleanInput = <T extends FieldValues>(
  props: Omit<ControllerProps<T>, "render"> & { label: string }
) => {
  return (
    <Controller
      {...props}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <GridItem>
          <FormGroup>
            <FormControlLabel
              label={props.label}
              control={
                <Checkbox
                  id={`${name}-id`}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  checked={value || false}
                  inputRef={ref}
                />
              }
            />
          </FormGroup>
        </GridItem>
      )}
    />
  );
};
