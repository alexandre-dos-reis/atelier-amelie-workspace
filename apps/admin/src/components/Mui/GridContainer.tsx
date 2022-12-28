import { Grid, GridProps } from "@pankod/refine-mui";

export const GridContainer = ({ spacing = 2, ...props }: Omit<GridProps, "container" | "item">) => {
  return <Grid {...props} container spacing={spacing} />;
};
