const { legacy_createStore } = require("redux");

// constans
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";


const initialState = {
    products: ["salt", "sugar"],
    count: 2
}

// ACTION
const getProducts = () => {
    return{
        type: GET_PRODUCTS,
    }
}
const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

const productReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_PRODUCTS:
            
            return{
                ...state
            }
        case ADD_PRODUCT:
            
            return{
                products: [...state.products, action.payload],
                count: state.count + 1
            }
    
        default:
            state;
    }
}

const store = legacy_createStore(productReducer)

store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProduct("rice"))
store.dispatch(addProduct("milk"))