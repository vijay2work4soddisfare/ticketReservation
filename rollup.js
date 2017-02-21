import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  dest: 'dist/build.js',
  sourceMap: false,
  format: 'iife',
  useStrict: false,
  plugins: [
    nodeResolve({ jsnext: true, module: true, browser: true }),  
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/angularfire2/**'
      ],
      namedExports: {
        'node_modules/angularfire2/node_modules/firebase/firebase-browser.js': ['initializeApp', 'auth', 'database']
      }
    }),
    uglify()
  ]
}