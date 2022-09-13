import { request } from "@strapi/helper-plugin";

const kycdataRequests = {
  find: async () => {
    return await request(`/wyre/find`, {
      method: "GET",
    });
  },

  addKycData: async (data) => {
    return await request(`/wyre/create`, {
      method: "POST",

      body: { data: data },
    });
  },

  editKycData: async (id, data) => {
    return await request(`/wyre/update/${id}`, {
      method: "PUT",

      body: { data: data },
    });
  },

  deleteKycData: async (id) => {
    return await request(`/wyre/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default kycdataRequests;
