import webpack from 'webpack'
import path from 'path'

export default {
  mode: 'development',
  entry: {
    app: './client/app/app.js',
    polyfills: './client/polyfills.js',
    vendor: [
      'angular',
      'angular-ui-router',
      'angular-validation-match',
      'angular-cookies',
      'angular-ui-bootstrap',
      'angular-material',
      'lodash'
    ]
  },
  output: {
    path: path.join(__dirname, '/.tmp/'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'client/'),
        path.resolve(__dirname, 'node_modules/lodash-es/')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules/'),
        path.resolve(__dirname, 'client/app/app.js')
      ]
    }, {
      // file-loader
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
      loader: 'file-loader'
    }, {
      // raw-loader
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      // style-loaer
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      name: 'vendor',
      minChunks: Infinity
    }
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
