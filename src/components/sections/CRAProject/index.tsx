import React, { useEffect, useState } from "react";

import { Stack } from "@mui/material";

import SectionContainer from "../SectionContainer";
import CheckBoxWithLabel from "../../Controls/CheckBoxWithLabel";

import MDChain from "../../../utils/MDChain";

import { TSection } from "../types";

type Props = {};

const CRAProject = ({ onChange = () => {} }: TSection & Props) => {
  const [checked, setChecked] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [isTest, setIsTest] = useState(true);
  const [isBuild, setIsBuild] = useState(true);
  const [isEject, setIsEject] = useState(false);

  useEffect(() => {
    if (checked) {
      let text = new MDChain()
        .addTitle("CRA Project Guide", "h3")
        .addParagraph("Project bootstrapped using Create React App");

      if (isStart)
        text
          .addTitle("Run Development Server", "h4")
          .addText("Runs local development server on ")
          .addLink("localhost:3000")
          .addLineBreak()
          .addCodeBlock("yarn start", "sh");
      if (isBuild)
        text
          .addTitle("Build Project", "h4")
          .addParagraph(
            "Builds the app for production. It correctly bundles React in production mode and optimizes the build for the best performance."
          )
          .addBlockquote("Files can be located in /build directory")
          .addCodeBlock("yarn build", "sh");
      if (isTest)
        text
          .addTitle("Test Project", "h4")
          .addParagraph(
            "Launches the test runner in the interactive watch mode."
          )
          .addCodeBlock("yarn test", "sh");
      if (isEject)
        text
          .addTitle("Eject Project", "h4")
          .addBlockquote(
            new MDChain()
              .addText("Note: this is a one-way operation. Once you ")
              .addCode("eject")
              .addText(", you can’t go back!")
              .addLineBreak()
              .render()
          )
          .addParagraph(
            "If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project."
          )
          .addLineBreak()
          .addText(
            "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in "
          )
          .addCode("package.json")
          .addText(".")
          .addLineBreak()
          .addCodeBlock("yarn eject", "sh");

      onChange(text.render());
    } else {
      onChange("");
    }
  }, [checked, isStart, isBuild, isTest, isEject]);

  return (
    <SectionContainer
      title="CRA Project Guide"
      checked={checked}
      onChange={setChecked}
    >
      <Stack spacing={2}>
        <CheckBoxWithLabel
          label="Run Development Server"
          checked={isStart}
          onChange={setIsStart}
        />
        <CheckBoxWithLabel
          label="Build Project"
          checked={isBuild}
          onChange={setIsBuild}
        />
        <CheckBoxWithLabel
          label="Test Project"
          checked={isTest}
          onChange={setIsTest}
        />
        <CheckBoxWithLabel
          label="Eject Project"
          checked={isEject}
          onChange={setIsEject}
        />
      </Stack>
    </SectionContainer>
  );
};

export default CRAProject;
