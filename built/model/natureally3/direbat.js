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
    var DireBat = /** @class */ (function (_super) {
        __extends(DireBat, _super);
        function DireBat(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Bat";
            _this.image = "https://s-media-cache-ak0.pinimg.com/originals/59/0d/ee/590deeb0b5a84ccfb5466a643b134df4.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bat.html#bat-dire";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["blindsense 40ft", "reach 5ft", "fly 40ft"];
            _this.skills = ["Fly +9", "Perception +12", "Stealth +4"];
            _this.armorclass = 14;
            _this.attack = ["Bite +5 1d8+4"];
            _this.speed = 20;
            _this.cmb = 7;
            _this.cmd = 19;
            _this.fort = 5;
            _this.ref = 6;
            _this.will = 3;
            _this.str = 17;
            _this.dex = 15;
            _this.con = 13;
            _this.int = 2;
            _this.wis = 14;
            _this.cha = 6;
            return _this;
        }
        return DireBat;
    }(creature_1.Creature));
    exports.DireBat = DireBat;
});
//# sourceMappingURL=direbat.js.map