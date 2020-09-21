const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    type: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    skillOne: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    skillTwo: {
      type: String,
      // required: [true, "{PATH} is required."],
      // minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    skillThree: {
      type: String,
      // required: [true, "{PATH} is required."],
      // minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
