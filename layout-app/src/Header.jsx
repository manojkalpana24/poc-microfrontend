import React, { useState, useEffect } from "react";
import { searchItemsAction } from "./action";
import { Provider, useDispatch } from "react-redux";
import "./Header.scss";
import layoutAppReducer, { layoutAppScope } from "./reducer";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const [searchItemsInput, setSearchItemsInput] = useState("");

  const onChangeSearchItems = (e) => {
    setSearchItemsInput(e.target.value);
  };

  const onSubmitSearchItems = () => {
    dispatch(searchItemsAction(searchItemsInput));
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black dark:bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">E Cart</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm md:flex-grow">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-2/4">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500"
                placeholder="Search"
                onChange={onChangeSearchItems}
              />
            </div>
            <button
              type="button"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-black-700 rounded-lg border border-white-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-white-800"
              onClick={onSubmitSearchItems}
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-transparent mt-4 lg:mt-0"
        >
          Login
        </a>
      </div>
    </nav>
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

export default Header;
