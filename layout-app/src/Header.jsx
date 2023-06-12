import React, { useState, useEffect } from "react";
import { searchItemsAction } from "./action";
import { Provider, useDispatch } from "react-redux";
import "./Header.scss";
import layoutAppReducer, { layoutAppScope } from "./reducer";
import {
  AccountIcon,
  BrowseIcon,
  NotificationsIcon,
  HomeIcon,
} from "@pluralsight/ps-design-system-icon";
import { layout } from "@pluralsight/ps-design-system-core";
import NavBar from "@pluralsight/ps-design-system-navbar";
import NavBrand from "@pluralsight/ps-design-system-navbrand";
import NavItem from "@pluralsight/ps-design-system-navitem";
//import NavUser from "@pluralsight/ps-design-system-navuser";
import SearchInput from "@pluralsight/ps-design-system-searchinput";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const [searchItemsInput, setSearchItemsInput] = useState("");

  const onChangeSearchItems = (e) => {
    setSearchItemsInput(e.target.value);
  };

  const onSubmitSearchItems = (event) => {
    if(event.keyCode !== 13) return;
    dispatch(searchItemsAction(searchItemsInput));
  };

  return (
    <NavBar
      brand={<NavBrand logo={<MyLogo />} wordmark="TITLE" />}
      items={
        <>
          <div
            style={{
              marginRight: layout.spacingXXSmall,
              display: "inline-block",
            }}
          >
            <NavItem icon={<HomeIcon />}>Home</NavItem>
          </div>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <NavItem icon={<BrowseIcon />} selected>
              Browse
            </NavItem>
            <NavItem>
              <SearchInput
                enterKeyHint="search"
                placeholder="Search and press enter to be taken to the search results"
                onChange={onChangeSearchItems}
                onKeyDown={onSubmitSearchItems}
              />
            </NavItem>
          </div>
        </>
      }
      utility={
        <React.Fragment>
          <div
            style={{
              marginRight: layout.spacingXXSmall,
              display: "inline-block",
            }}
          >
            <NavItem icon={<NotificationsIcon />} />
          </div>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <NavItem icon={<AccountIcon />} />
          </div>
        </React.Fragment>
      }
    />
  );
};

const Header = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(layoutAppScope, layoutAppReducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <HeaderContent />
    </Provider>
  );
};

function MyLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="url(#logo)" />
      <defs>
        <linearGradient
          id="logo"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A99A8" />
          <stop offset="1" stopColor="#576675" />
        </linearGradient>
      </defs>
    </svg>
  );
}


export default Header;
