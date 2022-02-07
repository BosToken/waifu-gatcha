var bintangTiga = require("./data/3star");
var bintangEmpat = require("./data/4star");
var bintangLima= require("./data/5star");

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
    ]
    
    var waifuGatcha = array[Math.floor(Math.random() * array.length)];

module.exports = waifuGatcha;