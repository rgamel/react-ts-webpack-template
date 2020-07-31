export const target = 'web';
export const mode = 'development';
export const entry = './src/index.tsx';
export const output = {
  path: require('path').resolve(__dirname, 'build'),
  filename: 'bundle.js',
};
export const module = {
  rules: [
    {
      test: /\.tsx?/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }
  ]
};
export const resolve = { extensions: ['.ts', '.tsx', '.js'] };
export const devServer = { contentBase: './', port: 5000 };
