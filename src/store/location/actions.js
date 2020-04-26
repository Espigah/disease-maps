import { CHANGE_LOCATION } from "./actionTypes";

const changeLocation = (
  namespace,
  {
    postalCode = "",
    street = "",
    number = "",
    city = "",
    neighborhood = "",
    province = "",
  }
) => ({
  type: `${namespace}/${CHANGE_LOCATION}`,
  location: { postalCode, street, number, city, neighborhood, province },
});

export { changeLocation };
