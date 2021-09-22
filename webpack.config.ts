import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

export default {
  mode,
  target: 'electron-renderer',
  entry: './src/rendererProcess.tsx',
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  }
} as webpack.Configuration;
