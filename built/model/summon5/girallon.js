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
define(["require", "exports", "knockout", "../enums", "../creature"], function (require, exports, ko, enums_1, creature_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Girallon = /** @class */ (function (_super) {
        __extends(Girallon, _super);
        function Girallon(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Girallon";
            _this.image = "https://i.pinimg.com/originals/03/16/64/031664ec6fd89e4ecf7cb8e25aa1b592.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/girallon.html#girallon";
            _this.hitpoints = ko.observable(73);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvison 60ft", "low-light vision", "scent", "climb 40ft", "reach 10ft"];
            _this.skills = ["Climb +12", "Perception +11", "Stealth +5"];
            _this.armorclass = 18;
            _this.attack = ["Bite +10 1d6+4", "Claw +10 1d4+4 plus rend", "Claw +10 1d4+4 plus rend", "Claw +10 1d4+4 plus rend", "Claw +10 1d4+4 plus rend", "Rend 1d4+6"];
            _this.speed = 40;
            _this.cmb = 12;
            _this.cmd = 25;
            _this.fort = 9;
            _this.ref = 8;
            _this.will = 5;
            _this.str = 19;
            _this.dex = 17;
            _this.con = 18;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 7;
            return _this;
        }
        return Girallon;
    }(creature_1.Creature));
    exports.Girallon = Girallon;
});
//# sourceMappingURL=girallon.js.map