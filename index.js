
// state
// action
// reducer
// store

const { legacy_createStore } = require("redux");

// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// state
const initialState = {
  count: 0,
};

// action
const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};
const resetCount = () => {
    return {
      type: RESET,
    };
  };
  const incrementByValue = (value) => {
    return {
      type: INCREMENT_BY_VALUE,
      payload: value
    };
  };

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      case RESET:
      return {
        ...state,
        count: 0,
      };
      case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

// store
const store = legacy_createStore(counterReducer);

store.subscribe(()=> {
    console.log(store.getState())
})

// store.dispatch(incrementCount())
// store.dispatch(incrementCount())
// store.dispatch(incrementCount())
// store.dispatch(decrementCount())
// store.dispatch(resetCount())
store.dispatch(incrementByValue(5))
store.dispatch(incrementByValue(15))