import Client, { Config } from 'shopify-buy';

const shopifyConfig = new Config({
  domain: ENV_CONFIG.SHOPIFY.DOMAIN,
  storefrontAccessToken: ENV_CONFIG.SHOPIFY.STORE_FRONT_ACCESS_TOKEN,
});
export default new Client(shopifyConfig);
