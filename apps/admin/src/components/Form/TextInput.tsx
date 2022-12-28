import { TextField } from "@pankod/refine-mui";
import { Controller, ControllerProps, FieldValues } from "@pankod/refine-react-hook-form";
import { GridItem } from "../Mui/GridItem";
import { ReactNode } from "react";

export interface TextInputProps<T extends FieldValues> extends Omit<ControllerProps<T>, "render"> {
  label: string;
  multiline?: boolean;
  disabled?: boolean;
  startComponent?: ReactNode;
  endComponent?: ReactNode;
}

export const TextInput = <T extends FieldValues>({
  multiline = false,
  disabled = false,
  ...props
}: TextInputProps<T>) => {
  return (
    <GridItem>
      <Controller
        {...props}
        render={({ field: { name, value, ref, ...rest }, formState: { errors } }) => (
          <TextField
            margin="normal"
            {...rest}
            inputRef={ref}
            required={props.rules?.required ? true : false}
            fullWidth
            disabled={disabled}
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            label={props.label}
            id={`${name}-id`}
            name={name}
            value={value || ""}
            multiline={multiline}
            InputProps={{
              startAdornment: props.startComponent,
              endAdornment: props.endComponent,
            }}
          />
        )}
      />
    </GridItem>
  );
};
