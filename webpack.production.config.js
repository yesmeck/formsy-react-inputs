var path = require('path');

module.exports = {

  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  externals: {
    react: 'react',
    'formsy-react': 'formsy-react'
  },
  output: {
    path: path.resolve(__dirname, 'release'),
    filename: 'formsy-react-inputs.js',
    libraryTarget: 'umd',
    library: 'FormsyReactInputs'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }

};
