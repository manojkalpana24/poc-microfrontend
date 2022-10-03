import React from "react";
import ReactDOM from "react-dom";
import Header from "layout_app/Header";

import "./index.scss";
import ItemsList from "./ItemsList";

const App = () => (
  <div className="bg-white dark:bg-gray-900 h-auto w-screen">
    <Header />
    <ItemsList></ItemsList>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
