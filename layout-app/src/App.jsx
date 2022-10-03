import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import ItemsList from "items_app/ItemsList";
import "./index.scss";

const App = () => (
  <div className="bg-white dark:bg-gray-900 h-auto w-screen">
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
