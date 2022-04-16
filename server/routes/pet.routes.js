const PetController = require("../controllers/pet.controller");

module.exports = app => {

  app.post("/api/pet", PetController.createNewPet)
  app.get("/api/pet", PetController.getAllPet)
  app.get("/api/pet/:id", PetController.findOneSinglePet);
  app.put("/api/pet/update/:id", PetController.updateExistingPet);
  app.delete("/api/pet/delete/:id", PetController.deleteAnExistingPet);

  // app.get("/api", PetController.index)

  // app.get("/api/pet/", PetController.findAllPets);
  // app.get("/api/pet/:id", PetController.findOneSinglePet);
  
  // app.post("/api/pet/new", PetController.createNewPet);
  // app.delete("/api/pet/delete/:id", PetController.deleteAnExistingPet);
};