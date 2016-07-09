module.exports = {

  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: './client/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx|\.js$/,
        exclude: /(node_modules|server)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
