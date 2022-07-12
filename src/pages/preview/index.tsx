import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { Stack } from "@mui/material";

type Props = {};

const PreviewPage = (props: Props) => {
  const [MDValue, setMDValue] = useState<string | undefined>();
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
    </Stack>
  );
};

export default PreviewPage;
