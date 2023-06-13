import { FETCH_ITEMS } from "./action";

export const itemsAppScope = "itemsAppReducer";

const initialState = {
  appName: "itemsApp",
  items: [],
};

const itemsMock = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/seed/picsum/540/360",
    title: "Advanced TypeScript",
    path: true,
    progress: 40,
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/seed/picsum/540/360",
    title: "Module federation and webpack",
    path: false,
    progress: 20,
  },
  {
    id: 3,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "Advanced Javascript Course",
    path: false,
    progress: 70,
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/seed/picsum/540/360",
    title: "Apache Kafka Deep Dive",
    path: false,
    progress: 80,
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/seed/picsum/540/360",
    title: "AWS fundamentals",
    path: false,
    progress: 10,
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/seed/picsum/540/360",
    title: "Generative AI fundamentals",
    path: false,
    progress: 10,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS: {

      if (action.payload === "all") {
        return {
          ...state,
          items: itemsMock,
        }
      }

      let items = itemsMock.filter((value) =>
        value?.title?.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        items: items,
      };
    }
  }
  return state;
};

export default reducer;
