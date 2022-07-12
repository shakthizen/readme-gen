import React, { useState } from "react";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { Button, Card, CardContent, Grid, Stack } from "@mui/material";

import Sections from "../../components/sections";

type Props = {};

const HomePage = (props: Props) => {
  const [MDValue, setMDValue] = useState<string | undefined>("");

  const handleSectionsChange = (text: string) => {
    setMDValue(text);
  };

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
      <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
        <Button variant="contained" component={Link} to="/preview">
          Preview &amp; Edit
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomePage;
