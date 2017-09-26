export var shopReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: action.products
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.product
      };
    case 'CLEAR_PRODUCT':
      return {
        ...state,
        product: null
      };
    case 'CREATE_CHECKOUT':
      return {
        ...state,
        checkout: action.checkout
      };
    case 'UPDATE_CHECKOUT':
      return {
        ...state,
        checkout: action.checkout
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        showCart: !state.showCart
      };
    case 'OPEN_CART':
      return {
        ...state,
        showCart: true
      };
    case 'CLOSE_CART':
      return {
        ...state,
        showCart: false
      };
    default:
      return state;
  }
};
