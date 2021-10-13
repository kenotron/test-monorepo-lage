const dotenv = require('dotenv');
dotenv.config();

/** @type { import("lage").ConfigOptions } */
module.exports = {
  pipeline: {
    typecheck: ["^typecheck"],
    build: [],
    test: ["build"],
    lint: [],
  },
  npmClient: "yarn",
  cacheOptions: {
    cacheStorageConfig: {
      provider: "azure-blob",
    },
    outputGlob: ["lib/**"],
  },
};
