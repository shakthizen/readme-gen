import React, { useEffect, useState } from "react";

import { Stack, TextField } from "@mui/material";

import Section from "../Section";

import MDChain from "../../../utils/MDChain";

import { TSection } from "../types";

type Props = {};

const BasicDetails = ({ onChange = () => {} }: TSection & Props) => {
  const [projectName, setProjectName] = useState<string | undefined>(
    "Project Name"
  );
  const [description, setDescription] = useState<string | undefined>(
    "Description"
  );

  useEffect(() => {
    let md = new MDChain()
      .addTitle(projectName || "", "h2")
      .addParagraph(description || "")
      .render();
    onChange(md);
  }, [projectName, description]);

  return (
    <Section title="Basic Details" checked disabled>
      <Stack spacing={2}>
        <TextField
          label="Project Name"
          value={projectName}
          onChange={(v) => setProjectName(v.target.value)}
        />
        <TextField
          label="Description"
          multiline
          rows={6}
          value={description}
          onChange={(v) => setDescription(v.target.value)}
        />
      </Stack>
    </Section>
  );
};

export default BasicDetails;
