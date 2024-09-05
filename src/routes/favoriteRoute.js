const express = require("express");
const { addToFavorites, getFavorites, removeFromFavorites,} = require("../controllers/favoriteController");
const favoriteRoute = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

favoriteRoute.post("/add", authMiddleware.verifyToken, addToFavorites);
favoriteRoute.get("/list", authMiddleware.verifyToken, getFavorites);
favoriteRoute.delete("/:id", authMiddleware.verifyToken, removeFromFavorites);

module.exports = favoriteRoute;