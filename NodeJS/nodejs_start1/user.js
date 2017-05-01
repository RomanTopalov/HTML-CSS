
// підключив json , потім через змінну викликав поле імя
var somePhrases = require('./some');


function User(name) {
    this.name=name;
}

User.prototype.hello = function (who) {

    console.log(somePhrases.Name + " Hello , " + who.name);
};
console.log("is required ");

exports.User = User;

