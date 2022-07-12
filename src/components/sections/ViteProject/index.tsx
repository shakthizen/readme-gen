import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import Section from "../Section";
import CheckBoxWithLabel from "../../Controls/CheckBoxWithLabel";

import MDChain from "../../../utils/MDChain";

import { TSection } from "../types";

type Props = {};

const ViteProject = ({ onChange = () => {} }: TSection & Props) => {
  const [checked, setChecked] = useState(false);
  const [isRun, setIsRun] = useState(true);
  const [isBuild, setIsBuild] = useState(true);
  const [isPreview, setIsPreview] = useState(true);

  useEffect(() => {
    if (checked) {
      let text = new MDChain().addTitle("Vite Project Guide", "h3");

      if (isRun)
        text
          .addTitle("Run Development Server", "h4")
          .addCodeBlock("yarn dev", "sh");
      if (isBuild)
        text.addTitle("Build Project", "h4").addCodeBlock("yarn build", "sh");
      if (isPreview)
        text
          .addTitle("Preview Project", "h4")
          .addCodeBlock("yarn preview", "sh");

      onChange(text.render());
    } else {
      onChange("");
    }
  }, [checked, isRun, isBuild, isPreview]);

  return (
    <Section title="Vite Project Guide" checked={checked} onChange={setChecked}>
      <Stack spacing={2}>
        <CheckBoxWithLabel
          label="Run Development Server"
          checked={isRun}
          onChange={setIsRun}
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
    </Section>
  );
};

export default ViteProject;
