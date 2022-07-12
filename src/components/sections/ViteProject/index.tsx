import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import SectionContainer from "../SectionContainer";
import CheckBoxWithLabel from "../../Controls/CheckBoxWithLabel";

import MDChain from "../../../utils/MDChain";

import { TSection } from "../types";

type Props = {};

const ViteProject = ({ onChange = () => {} }: TSection & Props) => {
  const [checked, setChecked] = useState(true);
  const [isDev, setIsDev] = useState(true);
  const [isBuild, setIsBuild] = useState(true);
  const [isPreview, setIsPreview] = useState(true);

  useEffect(() => {
    if (checked) {
      let text = new MDChain()
        .addTitle("Vite Project Guide", "h3")
        .addParagraph("Project bootstrapped using Vite");

      if (isDev)
        text
          .addTitle("Run Development Server", "h4")
          .addText("Runs local development server on ")
          .addLink("localhost:3000")
          .addLineBreak()
          .addCodeBlock("yarn dev", "sh");
      if (isBuild)
        text
          .addTitle("Build Project", "h4")
          .addParagraph("Build for production")
          .addBlockquote("Files can be located in /dist directory")
          .addCodeBlock("yarn build", "sh");
      if (isPreview)
        text
          .addTitle("Preview Project", "h4")
          .addParagraph(
            "Runs a local server and preview locally build project."
          )
          .addBlockquote(
            new MDChain()
              .addText("Must be built using ")
              .addCode("yarn build")
              .addText(" beforehand.")
              .render()
          )
          .addCodeBlock("yarn preview", "sh");

      onChange(text.render());
    } else {
      onChange("");
    }
  }, [checked, isDev, isBuild, isPreview]);

  return (
    <SectionContainer
      title="Vite Project Guide"
      checked={checked}
      onChange={setChecked}
    >
      <Stack spacing={2}>
        <CheckBoxWithLabel
          label="Run Development Server"
          checked={isDev}
          onChange={setIsDev}
        />
        <CheckBoxWithLabel
          label="Build Project"
          checked={isBuild}
          onChange={setIsBuild}
        />
        <CheckBoxWithLabel
          label="Preview Project"
          checked={isPreview}
          onChange={setIsPreview}
        />
      </Stack>
    </SectionContainer>
  );
};

export default ViteProject;
