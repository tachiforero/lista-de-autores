const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First name is required"],
		minlength: [5, "Muy corto nombre backend"]
	},

	});
module.exports.Author =  mongoose.model("Author", AuthorSchema);