var char5 = require("./data/5star");
var char4 = require("./data/4star");
var char3 = require("./data/3star");

var char = [
    char3,
    char3,
    char3,
    char4,
    char4,
    char4,
    char5,
    char5
];

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const index = randomInt(0, char.length)

module.exports.waifuGatcha = function () {
    return {
        name: char[index].name,
        anime: char[index].anime,
        picture: char[index].picture,
        star: char[index].gatcha,
    };
};
