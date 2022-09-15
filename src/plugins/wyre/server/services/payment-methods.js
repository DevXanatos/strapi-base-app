"use strict";

module.exports = ({ strapi }) => ({
  async getCards(query) {
    const result = await strapi.entityService.findOne(
      "plugin::wyre.paymentMethods",
      query
    );
    return result;
  },

  async deleteCard(id) {
    return await strapi.entityService.delete("plugin::wyre.paymentMethods", id);
  },

  async addCard(data) {
    return await strapi.entityService.create(
      "plugin::wyre.paymentMethods",
      data
    );
  },

  async updateCard(id, data) {
    const result = await strapi.entityService.update(
      "plugin::wyre.paymentMethods",
      id,
      data
    );
    return result;
  },
});
