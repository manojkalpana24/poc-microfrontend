import React from "react";
import ReactDOM from "react-dom";

import MainLayout from "parent_app/MainLayout";
import "@pluralsight/ps-design-system-core";
import "@pluralsight/ps-design-system-normalize";
import Theme from "@pluralsight/ps-design-system-theme";

ReactDOM.render(
  <Theme>
    <MainLayout />
  </Theme>,
  document.getElementById("app")
);
