import {
    SORT_PRICE_ASCENDING,
    SORT_PRICE_DESCENDING,
    SORT_DATE_ASCENDING,
    SORT_DATE_DESCENDING,
    SET_FILTER
} from '../../../app-consts';
    
  const initialState = {
    filteredProducts: [],
    filters: {}
  };
  const productsReducer = (state = initialState, action)=>{
    switch (action.type) {
        /*
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
        
      case INCREMENT_QUANTITY:
        return {
          ...state,
          order: state.order.map(product =>
            product.name === action.payload
              ? { ...product, quantity: product.quantity += 1 }
              : product,
          ),
        };
      case DECREMENT_QUANTITY:
        return {
          ...state,
          order: state.order.map(product =>
            product.name === action.payload
              ? { ...product, quantity: product.quantity -= 1 }
              : product,
          ),
        };
      case EMPTY_ORDER:
        return {
          ...state,
          order: []
        };
    */
      default:
        return state;
    }
  };
  export default productsReducer;