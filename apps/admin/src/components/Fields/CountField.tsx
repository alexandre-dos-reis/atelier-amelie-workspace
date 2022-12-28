import { NumberField, NumberFieldProps } from "@pankod/refine-mui";

interface Props extends NumberFieldProps {
  redAtZero?: boolean;
}

export const CountField = ({ redAtZero = false, ...rest }: Props) => {
  return <NumberField {...rest} sx={{ color: rest.value === 0 ? "red" : "inherit" }} />;
};
