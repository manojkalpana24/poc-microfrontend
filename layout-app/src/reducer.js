import { SEARCH_ITEMS } from "./action";

export const layoutAppScope = "layoutAppReducer";

const initialState = {
  appName: "layoutApp",
  searchItemsKeyword: "",
};

const layoutAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ITEMS: {
      return {
        ...state,
        searchItemsKeyword: action.payload,
      };
    }
  }
  return state;
};

export default layoutAppReducer;
