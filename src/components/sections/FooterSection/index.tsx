import React, { useEffect, useState } from "react";

import { Stack, TextField } from "@mui/material";

import SectionContainer from "../SectionContainer";
import CheckBoxWithLabel from "../../Controls/CheckBoxWithLabel";

import MDChain from "../../../utils/MDChain";

import { TSection } from "../types";

type Props = {};

const FooterSection = ({ onChange = () => {} }: TSection & Props) => {
  const [checked, setChecked] = useState(true);
  const [isContribution, setIsContribution] = useState(true);
  const [isAnyoneCanContriute, setIsAnyoneCanContriute] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [companyName, setCompanyName] = useState(
    "Zero One Technologies (Pvt) Ltd."
  );

  const [isCopyrights, setIsCopyrights] = useState(true);

  useEffect(() => {
    if (checked) {
      let text = new MDChain();

      if (isContribution) {
        text.addTitle("Contributing", "h3");

        if (isAnyoneCanContriute) {
          text.addParagraph(
            `For changes, please open an issue first to discuss what you would like to change.`
          );
        } else {
          text.addParagraph(
            `Pull requests are welcome only by the ${companyName}. For major changes, please open an issue first to discuss what you would like to change.`
          );
        }
      }
      if (isCopyrights)
        text
          .addTitle("Copyrights", "h3")
          .addParagraph(`©${year} ${companyName}`);

      onChange(text.render());
    } else {
      onChange("");
    }
  }, [
    checked,
    isContribution,
    isAnyoneCanContriute,
    isCopyrights,
    companyName,
    year,
  ]);

  return (
    <SectionContainer
      title="Vite Project Guide"
      checked={checked}
      onChange={setChecked}
    >
      <Stack spacing={2}>
        <TextField
          value={companyName}
          onChange={(v) => setCompanyName(v.target.value)}
          label="Company Name"
        />
        <TextField
          value={year}
          onChange={(v) => setYear(v.target.value)}
          label="Year"
        />
        <CheckBoxWithLabel
          label="Contributing Note"
          checked={isContribution}
          onChange={setIsContribution}
        />
        {isContribution && (
          <CheckBoxWithLabel
            label="Anyone Can Contribute"
            checked={isAnyoneCanContriute}
            onChange={setIsAnyoneCanContriute}
          />
        )}
        <CheckBoxWithLabel
          label="Copyrights Note"
          checked={isCopyrights}
          onChange={setIsCopyrights}
        />
      </Stack>
    </SectionContainer>
  );
};

export default FooterSection;
