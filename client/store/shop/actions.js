import store from 'store';
import _ from 'lodash';
import Client, { Config } from 'shopify-buy';

// action: init shop
export let initShop = () => {
  return (dispatch, getState, shopifyClient) => {
    return shopifyClient.fetchAllProducts().then((res) => {
      // set products
      let products = res || {};
      dispatch({
        type: 'ADD_PRODUCTS',
        products
      });

      // create checkout
      dispatch(createCheckout());

      // set active product if needed
      dispatch(setActiveProduct());
    });
  };
};

// action: set active product
export let setActiveProduct = (product) => {
  return (dispatch, getState, shopifyClient) => {
    let productHandle = window.location.pathname.split('/')[3];
    let shop = getState().shop;
    if (productHandle) {
      // find product in products
      let product = _.find(shop.products, {
        'handle': productHandle
      });

      // set product
      if (product) {
        dispatch({
          type: 'SET_PRODUCT',
          product
        });
      }
    }
  };
};

// action: clear active product
export let clearActiveProduct = () => {
  return {
    type: 'CLEAR_PRODUCT'
  }
};

// create checkout
export let createCheckout = () => {
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
export let addLineItems = (lineItemsToAdd) => {
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
export let updateLineItems = (lineItemsToUpdate) => {
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
export let removeLineItem = (lineItemId) => {
  return (dispatch, getState, shopifyClient) => {
    let checkoutId = getState().shop.checkout.id;
    return shopifyClient.removeLineItems(checkoutId, [lineItemId]).then(res => {
      let checkout = res || {};
      dispatch({
        type: 'UPDATE_CHECKOUT',
        checkout
      });
    });
  };
};

// toggle cart
export let toggleCart = () => {
  return {
    type: 'TOGGLE_CART'
  }
};

// open cart
export let openCart = () => {
  return {
    type: 'OPEN_CART'
  }
};

// close cart
export let closeCart = () => {
  return {
    type: 'CLOSE_CART'
  }
};
