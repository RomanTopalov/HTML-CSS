/**
 * Created by -rom- on 01.05.2017.
 */

var user = require('./user');

var vasya = new user.User("Vasya");
var petro = new user.User("Petro");

vasya.hello(petro);