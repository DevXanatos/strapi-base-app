module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/find",
    handler: "wyre.find",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "POST",
    path: "/create",
    handler: "wyre.create",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "wyre.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/update/:id",
    handler: "wyre.update",
    config: {
      policies: [],
      auth: false,
    },
  },
];
