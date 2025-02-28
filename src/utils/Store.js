
import { createStore } from 'redux';


const initialState = {
  products: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};


const store = createStore(rootReducer);

export default store;
