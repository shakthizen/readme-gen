import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import Section from "../Section";
import CheckBoxWithLabel from "../../Controls/CheckBoxWithLabel";

import { TSection } from "../types";

type Props = {};

const ViteProject = ({ onChange = () => {} }: TSection & Props) => {
  const [checked, setChecked] = useState(false);
  const [isRun, setIsRun] = useState(true);
  const [isBuild, setIsBuild] = useState(true);
  const [isPreview, setIsPreview] = useState(true);

  useEffect(() => {
    if (checked) {
      let text = `### Vite Project Guide\n`;
      if (isRun) text += `#### Run development server\n\`yarn dev\``;

      onChange(text);
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
