import React from "react";

import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { CodeOff } from "@mui/icons-material";

type Props = {
  actions?: React.ReactNode;
};

const NavigationBar = ({ actions }: Props) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "black", color: "white" }}>
      <Toolbar>
        <Stack flex={1} direction={"row"} alignItems={"center"} spacing={2}>
          <CodeOff fontSize="large" />
          <Typography variant="h6">Readme Gen</Typography>
        </Stack>
        {actions}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
