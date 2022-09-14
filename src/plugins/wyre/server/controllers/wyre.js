"use strict";

module.exports = {
  async find(ctx) {
    //ctx.state.user in Controller has authenticated user's data.
    //const mylog = `LOG: ${ctx.state.user} plus Query: ${ctx.query}`;
    // const mylog = ctx.query;
    // strapi.log.info(JSON.stringify(mylog));
    try {
      return await strapi.plugin("wyre").service("wyre").find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("wyre")
        .service("wyre")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("wyre")
        .service("wyre")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      ctx.body = await strapi
        .plugin("wyre")
        .service("wyre")
        .update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
