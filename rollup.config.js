// this is the rollup plugin that adds babel as a compilation stage.
import babel from 'rollup-plugin-babel'

//Convert CommonJS modules to ES6,
// so they can be included in a Rollup bundle
import commonjs from 'rollup-plugin-commonjs'

// Locate modules using the Node resolution algorithm,
// for using third party modules in node_modules
import nodeResolve from 'rollup-plugin-node-resolve'

// Rollup plugin to minify generated bundle.
import { uglify } from 'rollup-plugin-uglify'

// Replace strings in files while bundling them.
import replace from 'rollup-plugin-replace'

// Serve your rolled up bundle like webpack-dev-server
// without hot reload
import serve from 'rollup-plugin-serve'

var productionConfig = {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve({
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        './node_modules/react/react.js': [
          'cloneElement',
          'createElement',
          'PropTypes',
          'Children',
          'Component',
        ],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    uglify({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourcemap: false,
    }),
  ],
}

var developmentConfig = {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve({
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        './node_modules/react/react.js': [
          'cloneElement',
          'createElement',
          'PropTypes',
          'Children',
          'Component',
        ],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    serve({ contentBase: 'dist', open: true }),
  ],
}

export default developmentConfig
