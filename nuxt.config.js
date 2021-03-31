const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

const logOptions = {
  // optional : defaults to true if not specified
  isEnabled: true,
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel: 'debug',
  // optional : defaults to false if not specified
  stringifyArguments: false,
  // optional : defaults to false if not specified
  showLogLevel: false,
  // optional : defaults to false if not specified
  showMethodName: false,
  // optional : defaults to '|' if not specified
  separator: '|',
  // optional : defaults to false if not specified
  showConsoleColors: false,
}

export default {
  ...(!isDev && {
    modern: 'client',
  }),
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'presto-test',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  rootDir: __dirname,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', './assets/scss/global-styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-font-loader',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    // ['nuxt-log', logOptions],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]',
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    optimization: {
      minimize: !isDev,
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true,
      },
    }),
    ...(isDev && {
      extractCSS: true,
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: [
              'advanced',
              {
                autoprefixer: false,
                cssDeclarationSorter: false,
                zindex: false,
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        }),
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true,
        },
      }),

      order: 'cssnanoLast',
    },
    extend(config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            plugins: [
              { prefixIds: false }, // Disables prefixing for SVG IDs
            ],
          },
        },
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true,
        },
        jpegtran: {
          progressive: true,
        },
        gifsicle: {
          interlaced: true,
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true,
          }),
        ],
      })
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev
                  ? '[path][name].[ext]'
                  : 'img/[contenthash:7].[ext]',
              },
            },
          ]
        }
      })
      //  Create the custom SVG rule
      // const svgRule = {
      //   test: /\.svg$/,
      //   oneOf: [
      //     {
      //       resourceQuery: /inline/,
      //       use: vueSvgLoader,
      //     },
      //     {
      //       resourceQuery: /data/,
      //       loader: 'url-loader',
      //     },
      //     {
      //       resourceQuery: /raw/,
      //       loader: 'raw-loader',
      //     },
      //     {
      //       loader: 'file-loader', // By default, always use file-loader
      //     },
      //   ],
      // }

      // config.module.rules.push(svgRule) // Actually add the rule
    },
  },
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false,
    etag: false,
    static: {
      etag: false,
    },
  },

  // webfontloader: {
  //   events: false,
  //   google: {
  //     families: ['Montserrat:400,500,600:cyrillic&display=swap'],
  //   },
  //   timeout: 5000,
  // },
  styleResources: {
    // your settings here
    scss: ['./assets/scss/global-variables.scss'], // alternative: scss
    less: [],
    stylus: [],
  },
  ...(isDev && {
    server: {
      host: '0.0.0.0',
    },
  }),
  fontLoader: {
    url: '/fonts/GTEestiPro/GTEestiPro.css',
  },
}
