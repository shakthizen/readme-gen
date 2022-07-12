import { Button, Stack } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Stack flex={1} minHeight="100vh" spacing={2}>
      <NavigationBar
        actions={[
          <Button color="inherit" component={Link} to="/">
            Create New
          </Button>,
        ]}
      />
      <Outlet />
    </Stack>
  );
};

export default Layout;
