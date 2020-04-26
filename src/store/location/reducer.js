import { CHANGE_LOCATION } from "./actionTypes";
import { initialState } from "./state";
import {
  LOCATION_NAMESPACE_LOCATION,
  LOCATION_NAMESPACE_PIN,
  LOCATION_NAMESPACE_SOMEONE,
} from "./namespaces";

export const locationReducerFactory = ({ namespace }) => {
  return (state = initialState, action) => {
    debugger;
    var value = action.location;
    switch (action.type) {
      case `${namespace}/${CHANGE_LOCATION}`:
        return {
          ...state,
          ...value,
        };
      default:
        return state;
    }
  };
};

export const locationReducer = {
  location: locationReducerFactory({ namespace: LOCATION_NAMESPACE_LOCATION }),
  locationPin: locationReducerFactory({ namespace: LOCATION_NAMESPACE_PIN }),
  locationSomeone: locationReducerFactory({
    namespace: LOCATION_NAMESPACE_SOMEONE,
  }),
};
