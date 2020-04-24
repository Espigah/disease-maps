import immer from "immer";

const initialState = {
  infected: null,
  period: null,
  local: null,
  lastSteps: [],
};

let reducerActions = {
  addStep: (state, action) => {},
  removeStep: (state, action) => {},
  default: (state, action) => {
    const { value, property } = action.value;
    state[property] = value;
  },
};

const defaultReducerAction = (property, value) => {
  return {
    type: "default",
    value: {
      property,
      value,
    },
  };
};

function reducer(state, action) {
  let fn = reducerActions[action.type];

  if (fn) {
    return immer(state, (draftState) => fn(draftState, action));
  }

  console.log("[WARNING] Action without reducer:", action);
  return state;
}

export default {
  getReducer() {
    return reducer;
  },
  getInitialState() {
    return initialState;
  },
  updateInfected(value) {
    return defaultReducerAction("infected", value);
  },
  updatePeriod(value) {
    return defaultReducerAction("period", value);
  },
  updateLocal({ longitude, latitude }) {
    return defaultReducerAction("local", { longitude, latitude });
  },
  addStep(value) {
    return {
      type: "addStep",
      value,
    };
  },
  removeStep(value) {
    return {
      type: "removeStep",
      value,
    };
  },
};
