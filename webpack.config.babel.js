import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Visualizer from 'webpack-visualizer-plugin'
import WorkboxPlugin from 'workbox-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import PreloadPlugin from 'preload-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const ENV_VERSION = process.env.npm_package_version
const isProduction = LAUNCH_COMMAND === 'release' || LAUNCH_COMMAND === 'beta'
process.env.BABEL_ENV = LAUNCH_COMMAND

console.log('ENV VERSION --> 📟 ', ENV_VERSION)
console.log('LAUCH_COMMAND --> 🚀 ', LAUNCH_COMMAND)
console.log('Is production? --> 🐵 ', isProduction)
console.log('BABEL_ENV --> 🎲 ', LAUNCH_COMMAND)

const PATHS = {
  app: path.join(__dirname, 'src'),
  components: path.join(__dirname, 'src', 'components'),
  containers: path.join(__dirname, 'src', 'containers'),
  constants: path.join(__dirname, 'src', 'constants'),
  settings: path.join(__dirname, 'src', 'settings'),
  build: path.join(__dirname, 'dist'),
  reducers: path.join(__dirname, 'src', 'reducers'),
  styles: path.join(__dirname, 'src', 'styles'),
  helpers: path.join(__dirname, 'src', 'helpers'),
  routes: path.join(__dirname, 'src', 'routes'),
  images: path.join(__dirname, 'src', 'images')
}

const devtool = isProduction ? 'source-map' : 'source-map'
const mode = isProduction ? 'production' : 'development'

console.log('Tool -> ⚙️ ', devtool, mode)

const base = {
  mode: mode,
  devtool: devtool,
  context: PATHS.app,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ],
    extensions: ['.js', '.scss', '.ts', '.tsx', '.json', '.jpg', '.png', '.svg'],
    alias: {
      src: PATHS.app,
      components: PATHS.components,
      containers: PATHS.containers,
      constants: PATHS.constants,
      settings: PATHS.settings,
      reducers: PATHS.reducers,
      styles: PATHS.styles,
      helpers: PATHS.helpers,
      routes: PATHS.routes,
      images: PATHS.images
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // }
}

const developmentConfig = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:1319',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'index')
  ],
  output: {
    path: PATHS.build,
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    // contentBase: PATHS.build,
    publicPath: '/',
    historyApiFallback: true,
    port: 1319,
    compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(LAUNCH_COMMAND),
          ENV_VERSION: JSON.stringify(ENV_VERSION)
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'React Bulma Styled Components',
      // favicon: path.join(PATHS.images, 'favicon.ico'),
      template: path.join(__dirname, 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new PreloadPlugin({
      rel: 'preload',
      include: 'allChunks' // or 'initial'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new ManifestPlugin({
      seed: {
        name: 'Wyporn',
        'short_name': 'Wyporn',
        'start_url': '/',
        'background_color': '#3367D6',
        'display': 'standalone',
        'theme_color': '#cfc84a',
        icons: [{
          src: '#',
          type: 'image/jpg',
          sizes: '512x512'
        }]
      }
    }),
    new CleanWebpackPlugin(),
    // new webpack.ProvidePlugin({
    //   ReactDOM: 'react-dom',
    //   React: 'react'
    // }),
    new Visualizer({
      filename: './statistics.html'
    })
  ]
}

const productionConfig = {
  entry: {
    main: 'index'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
          ENV_VERSION: JSON.stringify(ENV_VERSION)
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Wyporn',
      // favicon: path.join(PATHS.images, 'favicon.ico'),
      template: path.join(__dirname, 'index.prod.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new PreloadPlugin({
      rel: 'preload',
      include: 'allChunks'
    }),
    new WorkboxPlugin.GenerateSW(),
    new ManifestPlugin({
      seed: {
        name: 'Wyporn',
        'short_name': 'Wyporn',
        'start_url': '',
        'background_color': '#3367D6',
        'display': 'standalone',
        'theme_color': '#cfc84a',
        icons: [{
          src: '#',
          type: 'image/jpg',
          sizes: '512x512'
        }]
      }
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    // new webpack.ProvidePlugin({
    //   ReactDOM: 'react-dom',
    //   React: 'react'
    // }),
    new Visualizer({
      filename: './statistics.prod.html'
    })
  ]
}

const config = isProduction === true ? 'Production' : 'Development'
console.log('Webpack config --> 🐵 ', config)

export default Object.assign(
  {}, base, isProduction === true ? productionConfig : developmentConfig
)
