import { Stack, Typography, Switch, Checkbox } from "@mui/material";
import { title } from "@uiw/react-md-editor";
import React from "react";

type Props = {
  label: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
};

const CheckBoxWithLabel = ({
  label,
  checked = true,
  onChange = () => {},
}: Props) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant="button">{label}</Typography>
      <Checkbox {...{ checked }} onChange={(e, c) => onChange(c)} />
    </Stack>
  );
};

export default CheckBoxWithLabel;
