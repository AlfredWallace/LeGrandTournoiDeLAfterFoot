module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Le Grand Tournoi de l'After Foot";
      return args;
    });
  }
};
