"use strict";

module.exports = ({ strapi }) => {
  // bootstrap phase

  // Load environment variables
  // Pending this PR: https://github.com/strapi/strapi/pull/3485
  require("dotenv").config({ path: require("find-config")(".env") });
};
