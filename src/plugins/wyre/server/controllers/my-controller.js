'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('wyre')
      .service('myService')
      .getWelcomeMessage();
  },
});
