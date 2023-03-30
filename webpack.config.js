const config = {
    mode: 'production',
    module: {
      rules: [{ test: /\.js$/, use: ['babel-loader'] }],
    },
}

export default config;
