import Client, { Config } from 'shopify-buy';

console.log('config', Config);

const shopifyConfig = new Config({
  domain: ENV_CONFIG.SHOPIFY.DOMAIN,
  storefrontAccessToken: ENV_CONFIG.SHOPIFY.STORE_FRONT_ACCESS_TOKEN
});
export const shopifyClient = new Client(shopifyConfig);
