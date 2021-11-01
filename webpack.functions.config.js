const path = require("path");
const fs = require("fs");

const OUTPUT_DIRECTORY = "dist";
const FUNCTIONS_DIRECTORY = "functions";
const FUNCTION_FILE_EXTENSION = ".js";

const getFunctionEntries = () => {
  return fs.readdirSync(path.resolve(__dirname, FUNCTIONS_DIRECTORY))
    .filter(file => path.extname(file) === FUNCTION_FILE_EXTENSION);
};

module.exports = () => {
  const functionEntries = getFunctionEntries();

  return functionEntries.map(filename => ({
    mode: "production",
    target: "node",
    entry: path.resolve(__dirname, `${FUNCTIONS_DIRECTORY}/${filename}`),
    output: {
      path: path.resolve(__dirname, OUTPUT_DIRECTORY),
      libraryTarget: "commonjs",
      filename
    }
  }));
};
