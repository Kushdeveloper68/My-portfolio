const express = require('express');
const router = express.Router();
const {  handleMainPage, handleUserCreate} =require('./Control.js');
const {postMiddleware} = require('./Middleware.js');
 router.get('/',handleMainPage);
 //first post
 router.post('/userCreate',postMiddleware, handleUserCreate);
 // second post non email
module.exports = router;