const PetController = require("../controllers/pet.controller");
module.exports = function (app) {
  // app.get("/api", PetController.index);
  app.post("/api/pets/new", PetController.createPet);
  app.get("/api/pets", PetController.getAllPets);
  app.get("/api/pets/:id", PetController.getOne);
  app.delete("/api/pets/adopt/:id", PetController.delete);
  app.put("/api/pets/:id/edit", PetController.update);
  app.put("/api/pets/:id", PetController.updateOne);
};
