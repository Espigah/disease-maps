import { CHANGE_FORM_STATE, ADD_PIN, REMOVE_PIN } from "./actionTypes";

const changeFormState = ({
  infected = "",
  contaminationDays = "",
  local = "",
  lastSteps = [],
}) => ({
  type: CHANGE_FORM_STATE,
  formForInfected: { infected, contaminationDays, local, lastSteps },
});

const addFormPin = ({
  postalCode = "",
  street = "",
  number = "",
  city = "",
  neighborhood = "",
  province = "",
}) => ({
  type: ADD_PIN,
  formForInfected: { postalCode, street, number, city, neighborhood, province },
});

const removeFormPin = ({
  postalCode = "",
  street = "",
  number = "",
  city = "",
  neighborhood = "",
  province = "",
}) => ({
  type: REMOVE_PIN,
  formForInfected: { postalCode, street, number, city, neighborhood, province },
});

export { changeFormState, addFormPin, removeFormPin };
