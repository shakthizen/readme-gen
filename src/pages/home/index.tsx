import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { Button, Card, CardContent, Fab, Grid, Stack } from "@mui/material";

import Sections from "../../components/sections";
import { Preview } from "@mui/icons-material";

type Props = {};

const HomePage = (props: Props) => {
  const navigate = useNavigate();
  const [MDValue, setMDValue] = useState<string | undefined>("");

  const handleSectionsChange = (text: string) => {
    setMDValue(text);
  };

  const handlePreview = useCallback(() => {
    navigate("/preview", { state: { data: MDValue } });
  }, [MDValue]);

  return (
    <Stack p={1} spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Sections onChange={handleSectionsChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <MDEditor.Markdown
                source={MDValue}
                rehypePlugins={[[rehypeSanitize]]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Preview"
        onClick={handlePreview}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Preview /> Preview
      </Fab>
    </Stack>
  );
};

export default HomePage;
