import React from "react";

import { Card, Stack, Typography, CardContent, Switch } from "@mui/material";

type Props = {
  title: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Section = ({
  title,
  disabled = false,
  checked = false,
  children,
  onChange = () => {},
}: Props) => {
  return (
    <Card variant="outlined">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
      >
        <Typography variant="h6">{title}</Typography>
        <Switch {...{ checked, disabled }} onChange={(e, c) => onChange(c)} />
      </Stack>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Section;
