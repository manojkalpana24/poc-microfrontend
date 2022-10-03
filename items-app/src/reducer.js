import { FETCH_ITEMS } from "./action";

export const itemsAppScope = "itemsAppReducer";

const initialState = {
  appName: "itemsApp",
  items: [],
};

const itemsMock = [
  {
    id: 1,
    imgUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    rating: 5,
    price: "$100",
  },
  {
    id: 2,
    imgUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
    title: "Bourge Mens Vega-z5 Running Shoes, Gym Shoes",
    rating: 3,
    price: "$69",
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS: {
      let items = itemsMock.filter((value) =>
        value?.title?.toLowerCase().includes(action.payload.toLowerCase())
      );

      console.log("FETC", items);

      return {
        ...state,
        items: items,
      };
    }
  }
  return state;
};

export default reducer;
