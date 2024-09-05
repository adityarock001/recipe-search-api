const express = require("express");
const recipeController = require("../controllers/recipeController");

const recipeRoute = express.Router();

recipeRoute.get("/get", recipeController.searchRecipesByIngredients);
recipeRoute.get("/get/:id", recipeController.getRecipeDetails);

module.exports = recipeRoute;