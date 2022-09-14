"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    //error: Undefined binding(s) detected when compiling WHERE. Undefined column(s): [t0.id] query: where `t0`.`id` = ?
    //return await strapi.entityService.findOne("plugin::wyre.wyre", query.id);
    const result = await strapi.entityService.findOne(
      "plugin::wyre.wyre",
      query
    );
    return result;
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::wyre.wyre", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::wyre.wyre", data);
  },

  async update(id, data) {
    //const mylog = `ID: ${id} and data: ${data}`;
    // strapi.log.info(
    //   "---------------------------- UPDATE: data ----------------------------"
    // );
    // strapi.log.info(JSON.stringify(data));
    const result = await strapi.entityService.update(
      "plugin::wyre.wyre",
      id,
      data
    );
    // strapi.log.info(JSON.stringify(result));
    // strapi.log.info(
    //   "---------------------------- UPDATE: data ----------------------------"
    // );
    return result;
  },
});
