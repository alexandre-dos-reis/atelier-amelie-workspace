import { Box } from "@pankod/refine-mui";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Form = ({ children }: Props) => {
  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column" }} autoComplete="off">
      {children}
    </Box>
  );
};
