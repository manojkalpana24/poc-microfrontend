import React from "react";
import ReactDOM from "react-dom";
//import ItemsList from "items_app/ItemsList";
import "@pluralsight/ps-design-system-core";
import "@pluralsight/ps-design-system-normalize";

import "./index.css";
import MainLayout from "parent_app/MainLayout";

ReactDOM.render(
    <MainLayout />,
  document.getElementById("app")
);
