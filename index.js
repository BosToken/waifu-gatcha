var bintangTiga = require("./data/3star");
var bintangEmpat = require("./data/4star");
var bintangLima = require("./data/5star");

var karung = {};

const array = [
    bintangLima,
    bintangEmpat,
    bintangTiga,
    bintangTiga,
    bintangLima,
    bintangEmpat,
    bintangTiga,
    bintangEmpat,
    bintangTiga,
    bintangTiga,
    bintangEmpat,
    bintangLima,
    bintangTiga,
];

function randomStar(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.waifuGatcha = function (name, anime, picture, star) {
    var index = randomStar(0, 12);
    karung.name = array[index].name;
    karung.anime = array[index].anime;
    karung.picture = array[index].picture;
    karung.star = array[index].gatcha;
    return karung;
};
