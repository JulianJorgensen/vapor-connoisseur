module.exports = {
  ENV: 'production',
  SITE_URL: 'https://vapor-connoisseur.herokuapp.com',
  SHOPIFY: {
    DOMAIN: 'vapor-connoisseur.myshopify.com',
    STORE_FRONT_ACCESS_TOKEN: 'd16e6aa0ee8ac23734c065c9379f2692',
  },
  EMAILS: {
    ADMIN: {
      // name: 'Julian Jorgensen', address: 'me@julianjorgensen.com',
      name: 'Vapor Connoisseur', address: 'info@vaporconnoisseur.com',
    },
    CC: [
      {
        name: 'Julian Jorgensen', address: 'me@julianjorgensen.com',
      },
    ],
  },
};
