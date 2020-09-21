const Pet = require("../models/pet.model");

// export an object that is full of methods
module.exports = {
  // long-form - key: value format
  // create: function (req, res) {
  //   console.log("create  method executed");
  //   // .create is async, we don't know exactly when it will finish, so it returns a promise
  //   // which we need to use .then to know when it's fulfilled
  //   // req.body is the data in the form that was POSTed or the data POSTed from pet
  //   Pet.create(req.body)
  //     // pet is just a param name, can be named anything
  //     // this is the newly created pet that the db returned
  //     .then((pet) => {
  //       res.json(pet);
  //     })
  //     .catch((err) => {
  //       // so that axios' .catch will be triggered
  //       // for validation errors and other errors
  //       res.status(400).json(err);
  //     });
  // },

  createPet: (req, res) => {
    Pet.findOne({ name: req.body.name })
      .then((data) => {
        if (data == null) {
          return Pet.create(req.body);
        } else {
          res.json({
            errors: {
              name: { message: "That name has already been given to a pet." },
            },
          });
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },

  getAllPets(req, res) {
    console.log("getAll method executed");

    Pet.find()
      .then((pets) => {
        res.json(pets);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    // .find will always return an array even if only one object is found
    // Pet.find({ _id: req.params.id })
    Pet.findById(req.params.id) // .findById returns only one object, no array
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Pet.findByIdAndDelete(req.params.id)
      .then((pet) => {
        // the pet that was deleted or null if id not found
        res.json(pet);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Pet.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((pet) => {
        // the pet with updated information
        console.log("update method .then");
        res.json(pet);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        console.log("update method .catch");
        res.status(400).json(err);
      });
  },

  updateOne(req, res) {
    console.log("update method executed", "url params:", req.params);

    Pet.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((pet) => {
        // the product with updated information
        console.log("update method .then");
        res.json(pet);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        console.log("update method .catch");
        res.status(400).json(err);
      });
  },

  // extra, if you want a form submission or pet submission to find by multiple keys
  findByFormInfo(req, res) {
    Pet.find(req.body)
      .then((pets) => {
        res.json(pets);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
