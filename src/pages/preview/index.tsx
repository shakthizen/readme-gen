import React, { useCallback, useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { Fab, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Download } from "@mui/icons-material";

type Props = {};

const PreviewPage = (props: Props) => {
  const location = useLocation();
  const [MDValue, setMDValue] = useState<string | undefined>();

  useEffect(() => {
    setMDValue((location.state as any).data);
  }, [location]);

  const handleDownload = useCallback(() => {
    let fileContents = MDValue?.trim() || "";
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(fileContents)
    );
    element.setAttribute("download", "readme.md");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }, [MDValue]);

  return (
    <Stack flex={1}>
      <MDEditor
        value={MDValue}
        onChange={setMDValue}
        height={600}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <Fab
        variant="extended"
        color="primary"
        aria-label="Download"
        onClick={handleDownload}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Download /> Download
      </Fab>
    </Stack>
  );
};

export default PreviewPage;
