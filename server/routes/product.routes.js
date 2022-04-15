const AuthorController = require("../controllers/author.controller");

module.exports = app => {

  app.post("/api/author", AuthorController.createNewAuthor)
  app.get("/api/author", AuthorController.getAllAuthor)
  app.get("/api/author/:id", AuthorController.findOneSingleAuthor);
  app.put("/api/author/update/:id", AuthorController.updateExistingAuthor);
  // app.get("/api", AuthorController.index)

  // app.get("/api/users/", UserController.findAllUsers);
  // app.get("/api/users/:id", UserController.findOneSingleUser);
  
  // app.post("/api/users/new", UserController.createNewUser);
  // app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};