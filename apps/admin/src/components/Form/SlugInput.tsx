import { TextField } from "@pankod/refine-mui";
import { Controller, FieldValues } from "@pankod/refine-react-hook-form";
import { GridItem } from "../Mui/GridItem";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { TextInputProps } from "./TextInput";
import slugify from "slugify";

const lockStyle = { marginRight: 10 };
const lockSize = 30;

export const SlugInput = <T extends FieldValues>({
  disabled = true,
  ...props
}: TextInputProps<T> & { onClickHandler: () => void }) => {
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
            value={slugify(value || "", { lower: true, trim: false })}
            multiline={props.multiline}
            InputProps={{
              startAdornment: disabled ? (
                <AiFillLock
                  size={lockSize}
                  style={lockStyle}
                  onClick={() => props.onClickHandler()}
                />
              ) : (
                <AiFillUnlock
                  size={lockSize}
                  style={lockStyle}
                  onClick={() => props.onClickHandler()}
                />
              ),
            }}
          />
        )}
      />
    </GridItem>
  );
};
