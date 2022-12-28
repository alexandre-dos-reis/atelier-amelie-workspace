import { ResourceProps } from "@pankod/refine-core";
import { ArtworkEdit } from "./ArtworkEdit";
import { ArtworkList } from "./ArtworkList";
import { FaPalette } from "react-icons/fa";

export const artworkResource: ResourceProps = {
  name: "Artwork",
  options: {
    label: "Oeuvres",
  },
  icon: <FaPalette />,
  list: ArtworkList,
  edit: ArtworkEdit,
};
