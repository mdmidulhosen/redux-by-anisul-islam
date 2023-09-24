
// state
// action
// reducer
// store

const { createStore } = require("redux");

// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

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

    default:
      state;
  }
};

// store
const store = createStore(counterReducer);

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(resetCount())