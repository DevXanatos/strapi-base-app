"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findOne("plugin::wyre.wyre", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::wyre.wyre", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::wyre.wyre", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::wyre.wyre", id, data);
  },
});
