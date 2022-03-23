var config = require("@commitlint/config-conventional");

// Increase to 300 characters for max line length in body
config["rules"]["body-max-line-length"] = [2, "always", 300];

module.exports = config;
