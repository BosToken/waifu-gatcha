var char5 = require("./data/5star");
var char4 = require("./data/4star");
var char3 = require("./data/3star");

var char = [
    ...char3,
    ...char3,
    ...char3,
    ...char3,
    ...char4,
    ...char4,
    ...char4,
    ...char5,
    ...char5
];

module.exports.waifuGatcha = function () {
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const index = randomInt(0, char.length - 1);
    var w = {};
    w.name = char[index].name;
    w.anime = char[index].anime;
    w.picture = char[index].picture;
    w.star = char[index].gatcha;
    return w;
};

module.exports.waifuRefresh = function (){
    var w = {};
    var loop = function () {
        const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const index = randomInt(0, char.length - 1);
        w.name = char[index].name;
        w.anime = char[index].anime;
        w.picture = char[index].picture;
        w.star = char[index].gatcha;
        return w;
    }
    setInterval(loop, 500);
    return loop();
}
