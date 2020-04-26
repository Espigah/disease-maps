import { REMOVE_LOCATION_ITEM, ADD_LOCATION_ITEM } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
const addLocationItem = ({
  label,
  background,
  removeEnabled = true,
  id = uuidv4(),
}) => ({
  type: ADD_LOCATION_ITEM,
  item: { label, background, id, removeEnabled },
});

const removeLocationItem = ({ label, id }) => ({
  type: REMOVE_LOCATION_ITEM,
  locationList: { label, id },
});

export { addLocationItem, removeLocationItem };
