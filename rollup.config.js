import litcss from 'rollup-plugin-lit-css'

export default {
  input: 'src/minireset.css.js',
  plugins: [
    litcss({ uglify: true })
  ],
  output: {
    file: 'minireset.css.lit.js',
    format: 'es'
  }
}