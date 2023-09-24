
// state
// action
// reducer
// store

const { legacy_createStore } = require("redux");

// constants
const USER_INCREMENT = "USER_INCREMENT";


// state
const initialState = {
  user: ["Mridul"],
  count: 1,
};

// action
const userIncrement = (users) => {
  return {
    type: USER_INCREMENT,
    payload: users
  };
};


// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        user: [...state.user, action.payload]
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
// store.dispatch(incrementByValue(5))
store.dispatch(userIncrement("Hosen"))
store.dispatch(userIncrement("Kibria"))