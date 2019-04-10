module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].meta = { viewport: 'width=device-width,initial-scale=1,user-scalable=no' };
        return args;
      });
  },
};
