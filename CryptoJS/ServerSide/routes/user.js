const express = require('express');
const routes = express.Router();
const {userlogin} = require('../controllers/user.js');

routes.post('/',userlogin)

module.exports=routes;