import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Provider, useSelector, useDispatch } from "react-redux";
import reducer, { itemsAppScope } from "./reducer";
import { fetchItemsAction } from "./action";
import ErrorBoundary from "./ErrorBoundary";
import { EqualColumnLayout } from "@pluralsight/ps-design-system-layout";

const layoutAppScope = "layoutAppReducer";

const ItemsContent = () => {
  const dispatch = useDispatch();
  const layoutAppState = useSelector((state) => state[layoutAppScope]);
  const itemsAppState = useSelector((state) => state[itemsAppScope]);

  useEffect(() => {
    dispatch(fetchItemsAction(layoutAppState.searchItemsKeyword));
  }, [layoutAppState.searchItemsKeyword]);

  const items = itemsAppState?.items?.map((value, index) => {
    return <li><Item key={value.id} {...value}></Item></li>;
  });

  return <EqualColumnLayout>
    <ul>{items}</ul></EqualColumnLayout>;
};

const ItemsList = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(itemsAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <ErrorBoundary>
        <div
          style={{
            marginRight: "100px",
            marginLeft: "100px",
            marginTop: "100px",
          }}
        >
          <ItemsContent></ItemsContent>
        </div>
      </ErrorBoundary>
    </Provider>
  );
};

export default ItemsList;
