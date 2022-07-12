import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout";

import HomePage from "../pages/home";
import PreviewPage from "../pages/preview";

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
