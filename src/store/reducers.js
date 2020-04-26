import { locationReducer } from "./location/reducer";

import { locationListReducer } from "./locationList/reducer";
import { formForInfectedReducer } from "./formForInfected/reducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  ...locationReducer,
  locationList: locationListReducer,
  formForInfected: formForInfectedReducer,
});
