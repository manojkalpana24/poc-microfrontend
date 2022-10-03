export const FETCH_ITEMS = "FETCH_ITEMS";

export const fetchItemsAction = (searchItemsKeyword) => {
  return { type: FETCH_ITEMS, payload: searchItemsKeyword };
};
