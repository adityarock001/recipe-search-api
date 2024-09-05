const express = require('express')
const userRoute = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");


userRoute.post('/signup', userController.userSignUp)
userRoute.post('/login', userController.userLogin)
userRoute.put('/update/profile', authMiddleware.verifyToken, userController.updateUserProfile);

module.exports = userRoute;