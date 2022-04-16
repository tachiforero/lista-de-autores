const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "First name is required back"],
		minlength: [5, "Muy corto nombre backend"]
	},

	type: {
		type: String,
		required: [true, "First name is required"],
		minlength: [5, "Muy corto nombre backend"]
	},

	petdescription: {
		type: String,
		required: [true, "First name is required"],
		minlength: [5, "Muy corto nombre backend"]
	},

	skills: {
		type: Array,
		required: [true, "First name is required"],
		minlength: [5, "Muy corto nombre backend"]
	},

	});
module.exports.Pet =  mongoose.model("Pet", PetSchema);