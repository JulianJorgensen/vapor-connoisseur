import _ from 'lodash';

// action: init shop
export const initShop = () => {
  return (dispatch, getState, shopifyClient) => {
    return shopifyClient.fetchAllProducts().then((res) => {
      // set products
      const products = res || {};
      dispatch({
        type: 'ADD_PRODUCTS',
        products,
      });

      // create checkout
      dispatch(createCheckout());

      // set active product if needed
      dispatch(setActiveProduct());
    });
  };
};

// action: set active product
export const setActiveProduct = () => {
  return (dispatch, getState, shopifyClient) => {
    const productHandle = window.location.pathname.split('/')[3];
    const { shop } = getState();
    if (productHandle) {
      // find product in products
      const product = _.find(shop.products, {
        handle: productHandle,
      });

      // set product
      if (product) {
        dispatch({
          type: 'SET_PRODUCT',
          product,
        });
      }
    }
  };
};

// action: clear active product
export const clearActiveProduct = () => {
  return {
    type: 'CLEAR_PRODUCT'
  }
};

// create checkout
export const createCheckout = () => {
  return (dispatch, getState, shopifyClient) => {
    return shopifyClient.createCheckout({}).then((res) => {
      let checkout = res || {};
      dispatch({
        type: 'CREATE_CHECKOUT',
        checkout
      });
    });
  };
};

// add line items to cart
export const addLineItems = (lineItemsToAdd) => {
  return (dispatch, getState, shopifyClient) => {
    let checkoutId = getState().shop.checkout.id;
    return shopifyClient.addLineItems(checkoutId, lineItemsToAdd).then((res) => {
      let checkout = res || {};
      dispatch({
        type: 'UPDATE_CHECKOUT',
        checkout
      });
    });
  };
};

// update line items in cart
export const updateLineItems = (lineItemsToUpdate) => {
  return (dispatch, getState, shopifyClient) => {
    let checkoutId = getState().shop.checkout.id;
    return shopifyClient.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      let checkout = res || {};
      dispatch({
        type: 'UPDATE_CHECKOUT',
        checkout
      });
    });
  };
};

// remove line item from cart
export const removeLineItem = lineItemId => (dispatch, getState, shopifyClient) => {
  const checkoutId = getState().shop.checkout.id;
  return shopifyClient.removeLineItems(checkoutId, [lineItemId]).then((res) => {
    const checkout = res || {};
    dispatch({
      type: 'UPDATE_CHECKOUT',
      checkout,
    });
  });
};

// clear cart
export const clearCart = () => ({
  type: 'CLEAR_CART',
});

// toggle cart
export const toggleCart = () => ({
  type: 'TOGGLE_CART',
});

// open cart
export const openCart = () => ({
  type: 'OPEN_CART',
});

// close cart
export const closeCart = () => ({
  type: 'CLOSE_CART',
});
