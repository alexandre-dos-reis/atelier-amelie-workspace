import { useResource } from "@pankod/refine-core";
import { Link as RRLink } from "@pankod/refine-react-router-v6";
import { ReactNode } from "react";
import { Link as MuiLink } from "@pankod/refine-mui";

interface Props {
  propId?: string | number;
  action: "edit";
  children: ReactNode;
}

export const Link = ({ action, propId, children }: Props) => {
  const { resourceName, id } = useResource();
  return (
    <MuiLink to={`/${resourceName}/${action}/${id ?? propId}`} component={RRLink}>
      {children}
    </MuiLink>
  );
};
