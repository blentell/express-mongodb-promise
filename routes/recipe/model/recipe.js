const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		recipe: {
			type: String,
		},
		price: {
			type: Number,
			default: 0.00,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("recipe", recipeSchema);
