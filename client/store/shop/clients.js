import Client, { Config } from 'shopify-buy';

const shopifyConfig = new Config({
  domain: 'vapor-connoisseur.myshopify.com',
  storefrontAccessToken: 'd16e6aa0ee8ac23734c065c9379f2692'
});
export const shopifyClient = new Client(shopifyConfig);
