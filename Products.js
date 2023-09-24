const { legacy_createStore, combineReducers } = require("redux");

// constans
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

const initialState = {
  products: ["salt", "sugar"],
  count: 2,
};

const initialCartState = {
    cart: ["mango", "banana"],
    count: 2,
  };

// ACTION
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const getCart = () => {
    return {
      type: GET_CART,
    };
  };
  const addCart = (cart) => {
    return {
      type: ADD_CART,
      payload: cart,
    };
  };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1,
      };

    default:
     return state;
  }
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case GET_CART:
        return {
          ...state,
        };
      case ADD_CART:
        return {
          cart: [...state.cart, action.payload],
          count: state.count + 1,
        };
  
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
  })

const store = legacy_createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct("rice"));
store.dispatch(addProduct("milk"));

store.dispatch(getCart());
store.dispatch(addCart("rice"));
store.dispatch(addCart("milk"));
