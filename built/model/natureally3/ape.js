var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "knockout", "../enums", "../animal"], function (require, exports, ko, enums_1, animal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ape = /** @class */ (function (_super) {
        __extends(Ape, _super);
        function Ape(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Ape";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/1/15/Gorilla.jpg/250px-Gorilla.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ape.html#ape";
            _this.hitpoints = ko.observable(19);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 10ft", "climb 30ft"];
            _this.skills = ["Acrobatics +6", "Climb +14", "Perception +8"];
            _this.armorclass = 14;
            _this.attack = ["Slam +3 1d6+2", "Slam +3 1d6+2"];
            _this.speed = 30;
            _this.cmb = 5;
            _this.cmd = 17;
            _this.fort = 7;
            _this.ref = 5;
            _this.will = 2;
            _this.str = 15;
            _this.dex = 15;
            _this.con = 14;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 7;
            return _this;
        }
        return Ape;
    }(animal_1.Animal));
    exports.Ape = Ape;
});
//# sourceMappingURL=ape.js.map