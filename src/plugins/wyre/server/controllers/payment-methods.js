"use strict";

module.exports = {
  async getCards(ctx) {
    //ctx.state.user in Controller has authenticated user's data.
    //const mylog = `LOG: ${ctx.state.user} plus Query: ${ctx.query}`;
    // const mylog = ctx.query;
    // strapi.log.info(JSON.stringify(mylog));
    try {
      return await strapi
        .plugin("wyre")
        .service("paymentMethods")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async addCard(ctx) {
    try {
      ctx.body = await strapi
        .plugin("wyre")
        .service("paymentMethods")
        .addCard(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async deleteCard(ctx) {
    try {
      ctx.body = await strapi
        .plugin("wyre")
        .service("paymentMethods")
        .deleteCard(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async updateCard(ctx) {
    try {
      ctx.body = await strapi
        .plugin("wyre")
        .service("paymentMethods")
        .updateCard(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
