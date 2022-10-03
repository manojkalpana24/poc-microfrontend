import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "layout_app/Header";
import { store } from "./store";

const ItemsList = React.lazy(() => import("items_app/ItemsList"));

export default function MainLayout() {
  return (
    <Provider store={store}>
      <div className="dark">
        <div className="bg-white dark:bg-gray-900 h-screen w-screen">
          <Router>
            <Header store={store} />
            <div className="container mx-auto mt-10">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<ItemsList store={store} />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </div>
      </div>
    </Provider>
  );
}
