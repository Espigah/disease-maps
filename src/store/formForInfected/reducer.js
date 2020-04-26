import { ADD_PIN, CHANGE_FORM_STATE, REMOVE_PIN } from "./actionTypes";
import { initialState } from "./state";

export const formForInfectedReducer = (state = initialState, action) => {
  let value = action.formForInfected;
  switch (action.type) {
    case CHANGE_FORM_STATE:
      return {
        ...state,
        ...value,
      };
    case ADD_PIN:
      debugger;
      return [...state, { ...value }];
    case REMOVE_PIN:
      return [...state.filter((item) => item.id !== value.id)];
    default:
      return state;
  }
};
