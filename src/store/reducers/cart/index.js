import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../../../app-consts';
    
  const initialState = {
    cart: []
  };
  const cartReducer = (state = initialState, action)=>{
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.order, action.payload]
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.order.filter(product => product.name !== action.payload),
        };
      default:
        return state;
    }
  };
  export default cartReducer;