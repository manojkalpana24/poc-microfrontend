import React from "react";
import ReactDOM from "react-dom";
//import Header from "layout_app/Header";
import Theme from "@pluralsight/ps-design-system-theme";
import "@pluralsight/ps-design-system-core";
import "@pluralsight/ps-design-system-normalize";

import "./index.scss";
import MainLayout from "parent_app/MainLayout";

ReactDOM.render(
  <Theme>
    <MainLayout />
  </Theme>,
  document.getElementById("app")
);
