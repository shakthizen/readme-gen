import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout";

import HomePage from "../pages/home";
import PreviewPage from "../pages/preview";

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
