const UsuarioController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/usuario", UsuarioController.post);
  app.put("/usuario/:id", UsuarioController.put);
  app.delete("/usuario/:id", UsuarioController.delete);
  app.get("/usuarios", UsuarioController.get);
  app.get("/usuario/:id", UsuarioController.getById);
};
