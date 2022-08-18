import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/esm/vue.mjs',
    output: {
      file: './public/esm/vue.mjs',
      format: 'esm'
    },
    plugins: [
      resolve()
    ],
    sourceMap: true,
}