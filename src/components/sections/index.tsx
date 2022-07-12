import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import BasicDetails from "./BasicDetails";
import CRAProject from "./CRAProject";
import ViteProject from "./ViteProject";

import { TSection } from "./types";
import FooterSection from "./FooterSection";

type Props = {};

const Sections = ({ onChange = () => {} }: TSection & Props) => {
  const [basicDetailsSection, setBasicDetailsSection] = useState<
    string | undefined
  >("");
  const [viteProjectSection, setViteProjectSection] = useState<
    string | undefined
  >("");
  const [craProjectSection, setCRAProjectSection] = useState<
    string | undefined
  >("");
  const [footerSection, setFooterSection] = useState<string | undefined>("");

  useEffect(() => {
    onChange(
      `${basicDetailsSection}  \n${viteProjectSection}  \n${craProjectSection}  \n${footerSection}`
    );
  }, [
    basicDetailsSection,
    viteProjectSection,
    craProjectSection,
    footerSection,
  ]);

  return (
    <Stack spacing={2}>
      <BasicDetails onChange={setBasicDetailsSection} />
      <ViteProject onChange={setViteProjectSection} />
      <CRAProject onChange={setCRAProjectSection} />
      <FooterSection onChange={setFooterSection} />
    </Stack>
  );
};

export default Sections;
