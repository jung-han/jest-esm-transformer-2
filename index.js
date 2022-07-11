const babel = require("@babel/core");

module.exports = {
  process(src) {
    return {
      code: babel.transform(src, {
        babelrc: false,
        compact: false,
        plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
      }).code,
    };
  },
};
