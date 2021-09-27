const Recipe = require("../model/Recipe");

function getAllRecipe(body) {
	return new Promise((resolve, reject) => {
		Recipe.find(body)
			.then((payload) => {
				resolve(payload);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

function createRecipe(body) {
	return new Promise((resolve, reject) => {
		const newRecipe = new Recipe({
			recipe: body.recipe,
			price: body.price,
		});

		newRecipe
			.save()
			.then((payload) => {
				resolve(payload);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

function updateRecipeByID(id, body) {
	return new Promise((resolve, reject) => {
		Recipe.findByIdAndUpdate(id, body, { new: true })
			.then((payload) => {
				resolve(payload);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

function deleteRecipeByID(id, body) {
	return new Promise((resolve, reject) => {
		Recipe.findByIdAndDelete(id, body)
			.then((payload) => {
				resolve(payload);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

module.exports = {
	getAllRecipe,
	createRecipe,
	updateRecipeByID,
	deleteRecipeByID,
};
