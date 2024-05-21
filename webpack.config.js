import path from 'path';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    'monaco-editor': './src/editor.js'
  },
  node: {
    __dirname: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/inline',
      }
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json', 'yaml'], // Add supported languages here
      customLanguages: [
        {
          label: 'yaml',
          entry: 'monaco-yaml',
          worker: {
            id: 'monaco-yaml/yamlWorker',
            entry: 'monaco-yaml/yaml.worker',
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        monaco: {
          name: 'monaco-editor',
          test: /[\\/]node_modules[\\/](monaco-editor)[\\/]/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  devtool: 'source-map', // Enable source maps
};
