import { Box } from "@pankod/refine-mui";
import { ReactNode } from "react";

export interface Props {
  label: string;
  children?: ReactNode;
  index?: number;
  value?: number;
}

export function Tab({ children, value, index, ...other }: Props) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
