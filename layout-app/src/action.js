export const SEARCH_ITEMS = "SEARCH_ITEMS";

export const searchItemsAction = (keyword) => {
  return { type: SEARCH_ITEMS, payload: keyword };
};
