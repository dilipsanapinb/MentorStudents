const express = require('express');
const userController=require('../controllers/user.controller')
const userRoute = express.Router();

userRoute.get('/allusers', userController.getAllUsers);

module.exports = userRoute;


