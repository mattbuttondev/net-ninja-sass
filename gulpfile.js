const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () => {
  return src("sass/**/*.scss").pipe(sass()).pipe(dest("css"));
};

const watchTask = () => {
  watch(["sass/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
