var tiga = require("./data/3star");
var empat = require("./data/4star");
var lima = require("./data/5star");

var karung = {};

const array = [
    lima.bintangLima(),
    empat.bintangEmpat(),
    tiga.bintangTiga(),
    tiga.bintangTiga(),
    lima.bintangLima(),
    empat.bintangEmpat(),
    tiga.bintangTiga(),
    empat.bintangEmpat(),
    tiga.bintangTiga(),
    tiga.bintangTiga(),
    empat.bintangEmpat(),
    lima.bintangLima(),
    tiga.bintangTiga(),
];

function randomStar(min, max) {
    return Math.floor(Math.random() * array.length);
}

module.exports.waifuGatcha = function (name, anime, picture, star) {
    var index = randomStar(0, array.length);
    karung.name = array[index].name;
    karung.anime = array[index].anime;
    karung.picture = array[index].picture;
    karung.star = array[index].star;
    return karung;
};
