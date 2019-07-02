// routes/users.js
var express           = require('express'),
    UsersController   = express.Router();

UsersController.route('/?')
  .get(/*...*/)
  .post(/*...*/)
  .delete(/*...*/);

module.exports = UsersController;