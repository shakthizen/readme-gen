import React from "react";

import { AppBar, Stack, Toolbar } from "@mui/material";

import Logo from "../../images/logo.jpg";

type Props = {
  actions?: React.ReactNode;
};

const NavigationBar = ({ actions }: Props) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "black", color: "white" }}>
      <Toolbar>
        <Stack
          flex={1}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"stretch"}
        >
          <img src={Logo} height="48px" />
          {actions}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
