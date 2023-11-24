// https://cssnano.co/docs/getting-started/

module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'), // https://github.com/luisrudge/postcss-flexbugs-fixes#readme
    require('postcss-preset-env')({
      autoprefixer: {
        grid: false,
      },
    }),
  ]
}
