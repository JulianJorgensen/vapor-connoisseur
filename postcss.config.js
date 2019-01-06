module.exports = {
  plugins: {
    'postcss-import': {
      root: __dirname,
      path: __dirname + '/client/styles',
    },
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-remify': {},
    'postcss-cssnext': {},
    'postcss-easings': {},
  },
};
