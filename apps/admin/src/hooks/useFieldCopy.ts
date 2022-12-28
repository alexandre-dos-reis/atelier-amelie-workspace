import {
  FieldValue,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from "@pankod/refine-react-hook-form";
import { useEffect, useState } from "react";

export const useFieldCopy = <TVariables extends FieldValues = FieldValues>(
  watch: UseFormWatch<TVariables>,
  setValue: UseFormSetValue<TVariables>,
  fieldToWatch: FieldValue<TVariables>,
  fieldToApply: FieldValue<TVariables>
) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const sub = watch((value, { name }) => {
      if (disabled && name === fieldToWatch) {
        setValue(fieldToApply, value.name || "");
      }
    });
    return () => sub.unsubscribe();
  }, [watch, disabled]);

  return { disabled, setDisabled };
};
