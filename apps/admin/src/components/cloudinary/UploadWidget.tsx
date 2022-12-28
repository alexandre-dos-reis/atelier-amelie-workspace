import { Box, Button, ButtonProps } from "@pankod/refine-mui";
import { useEffect, useRef } from "react";

interface Props extends ButtonProps {
  onUploadCallback: (url: string) => void;
}

export const UploadWidget = ({ onUploadCallback, ...props }: Props) => {
  const cloudinaryRef = useRef<CloudinaryBase>();
  const widgetRef = useRef<CloudinaryUploadWidget>();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "djccfwbjb",
        uploadPreset: "ovp4yjyg",
      },
      (err, res) => {
        if (err) {
          console.error(err);
        }
        if (res.event === "success") {
          onUploadCallback(res.info.path);
        }
      }
    );
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button
        variant="outlined"
        sx={{ marginBottom: 3 }}
        {...props}
        onClick={() => widgetRef.current?.open()}
      >
        Charger une image
      </Button>
    </Box>
  );
};
