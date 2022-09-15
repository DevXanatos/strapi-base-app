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
    path: "/getCards",
    handler: "paymentMethods.getCards",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/addCard",
    handler: "paymentMethods.addCard",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/deleteCard/:id",
    handler: "paymentMethods.deleteCard",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/updateCard/:id",
    handler: "paymentMethods.updateCard",
    config: {
      policies: [],
      auth: false,
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
