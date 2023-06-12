import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Provider, useSelector, useDispatch } from "react-redux";
import reducer, { itemsAppScope } from "./reducer";
import { fetchItemsAction } from "./action";
import ErrorBoundary from "./ErrorBoundary";
import Example from "./Example";

const layoutAppScope = "layoutAppReducer";

const ItemsContent = () => {
  const dispatch = useDispatch();
  const layoutAppState = useSelector((state) => state[layoutAppScope]);
  const itemsAppState = useSelector((state) => state[itemsAppScope]);

  useEffect(() => {
    console.log(itemsAppState);
    dispatch(fetchItemsAction(layoutAppState.searchItemsKeyword));
  }, [layoutAppState.searchItemsKeyword]);

  const items = itemsAppState?.items?.map((value, index) => {
    return <Item key={value.id} {...value}></Item>;
  });

  return <div className="grid grid-cols-4 gap-4">{items}</div>;
};

const ItemsList = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(itemsAppScope, reducer);
  }, []);

  useEffect(() => {
    console.log('fsfsadf')
  });

  return (
    <Provider store={store || {}}>
      <ErrorBoundary>
        <div style={{marginRight: '100px', marginLeft: '100px', marginTop: '100px'}}>
          <Example />
        </div>
      </ErrorBoundary>
    </Provider>
  );
};

export default ItemsList;
