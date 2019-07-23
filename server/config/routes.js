const pets = require('./../controllers/pets');

module.exports = (app) => {
    app.get("/pets", pets.getAll);
    app.post("/pets/", pets.create);
    app.get("/pets/:id", pets.getOne);
    app.put("/pets/:id", pets.update);
    app.delete("/pets/:id", pets.delete);
    app.post("/pets/:id/like", pets.like);
};