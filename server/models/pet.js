const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be provided."], minlength: [3, "Name must be at least 3 characters long."], unique: true},
    type: {type: String, required: [true, "Type must be proivded."], minlength: [3, "Type must be at least 3 characters long."]},
    description: {type: String, required: [true, "Description must be proivded."], minlength: [3, "Description must be at least 3 characters long."]},
    skills: {type: String},
    skills2: {type: String},
    skills3: {type: String},
    likes: {type: Number, default:0},
}, {timestamps: true});

PetSchema.plugin(uniqueValidator, {message: "Name is not unique"});
mongoose.model("Pet", PetSchema);
