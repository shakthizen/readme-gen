import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import BasicDetails from "./BasicDetails";
import CRAProject from "./CRAProject";
import ViteProject from "./ViteProject";

import { TSection } from "./types";

type Props = {};

const Sections = ({ onChange = () => {} }: TSection & Props) => {
  const [basicDetails, setBasicDetails] = useState<string | undefined>("");
  const [viteProject, setViteProject] = useState<string | undefined>("");
  const [craProject, setCRAProject] = useState<string | undefined>("");

  useEffect(() => {
    onChange(`${basicDetails}  \n${viteProject}  \n${craProject}`);
  }, [basicDetails, viteProject, craProject]);

  return (
    <Stack spacing={2}>
      <BasicDetails onChange={setBasicDetails} />
      <ViteProject onChange={setViteProject} />
      <CRAProject onChange={setCRAProject} />
    </Stack>
  );
};

export default Sections;
