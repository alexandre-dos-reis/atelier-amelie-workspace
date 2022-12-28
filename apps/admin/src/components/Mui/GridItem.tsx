import { Grid, GridProps } from "@pankod/refine-mui";

export const GridItem = ({xs = 6, ...props}: Omit<GridProps, "container" | "item"> ) => {
  return <Grid {...props} item xs={xs} />;
};
