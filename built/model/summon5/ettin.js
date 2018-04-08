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
    var Ettin = /** @class */ (function (_super) {
        __extends(Ettin, _super);
        function Ettin(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Ettin";
            _this.image = "https://i.pinimg.com/originals/5f/2c/d7/5f2cd775f19838458c4ffa8eb9c09a7a.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ettin.html#ettin";
            _this.hitpoints = ko.observable(65);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "cleave", "power attack", "reach 10ft"];
            _this.skills = ["Handle Animal +8", "Perception +12"];
            _this.armorclass = 18;
            _this.attack = ["Flail +12 2d6+6", "Flail +12 2d6+6", "Flail +7 2d6+6", "Flail +7 2d6+6", "Javelin +5 1d8+6", "Javelin +5 1d8+6"];
            _this.speed = 40;
            _this.cmb = 14;
            _this.cmd = 23;
            _this.fort = 9;
            _this.ref = 2;
            _this.will = 5;
            _this.str = 23;
            _this.dex = 8;
            _this.con = 15;
            _this.int = 6;
            _this.wis = 10;
            _this.cha = 11;
            return _this;
        }
        return Ettin;
    }(creature_1.Creature));
    exports.Ettin = Ettin;
});
//# sourceMappingURL=ettin.js.map