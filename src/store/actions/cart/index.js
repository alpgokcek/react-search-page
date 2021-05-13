import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../../../app-consts';


export const addToCart = product => {
  delete product.badges;
  return {
    type: ADD_TO_CART,
    payload: product
  };
};
export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: product.id,
  };
};