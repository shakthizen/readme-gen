import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { Button, Card, CardContent, Grid, Stack } from "@mui/material";

import BasicDetails from "../../components/sections/BasicDetails";
import ViteProject from "../../components/sections/ViteProject";
import CRAProject from "../../components/sections/CRAProject";

type Props = {};

const HomePage = (props: Props) => {
  const [MDValue, setMDValue] = useState<string | undefined>("");
  const [basicDetails, setBasicDetails] = useState<string | undefined>("");
  const [viteProject, setViteProject] = useState<string | undefined>("");
  const [craProject, setCRAProject] = useState<string | undefined>("");

  useEffect(() => {
    setMDValue(`${basicDetails}  \n${viteProject}  \n${craProject}`);
  }, [basicDetails, viteProject, craProject]);

  return (
    <Stack p={1} spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack>
            <BasicDetails onChange={setBasicDetails} />
            <ViteProject onChange={setViteProject} />
            <CRAProject onChange={setCRAProject} />
          </Stack>
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
