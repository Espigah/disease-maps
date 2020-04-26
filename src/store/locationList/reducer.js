import { ADD_LOCATION_ITEM, REMOVE_LOCATION_ITEM } from "./actionTypes";
import { initialState } from "./state";

export const locationListReducer = (state = initialState, action) => {
  let newItem = action.locationList;
  switch (action.type) {
    case ADD_LOCATION_ITEM:
      return [...state, { ...newItem }];

    case REMOVE_LOCATION_ITEM:
      return [...state.filter((item) => item.id !== newItem.id)];
    default:
      return state;
  }
};
