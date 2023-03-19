const Router = require('express').Router();

//------- Start to import the require controllers -------------------X
const AuthControllers = require('../controllers/AuthControllers');

//--------Start to import the middlewares ---------------------X
const FetchUser = require('../middlewares/FetchUser'); // middlewares can used to get the all contents of the login users

//-----Creating the authentications apis------------X
Router.post('/auth/register',AuthControllers().Register); //Register the user after checking the authentication,using POST '/api/auth/register'
Router.post('/auth/login',AuthControllers().Login); // Login the register user after checking the authentication,using POST '/api/auth/login'
Router.get('/auth/getUser',FetchUser,AuthControllers().getUser); // Get the all details of theLogin user,using GET '/api/auth/getUser'

module.exports = Router