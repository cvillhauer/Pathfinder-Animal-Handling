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
    var ElectricEel = /** @class */ (function (_super) {
        __extends(ElectricEel, _super);
        function ElectricEel(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Electric Eel";
            _this.image = "http://www.xsjjys.com/data/out/40/WHDQ-511868679.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/eel.html#eel-electric";
            _this.hitpoints = ko.observable(17);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "swim 30ft"];
            _this.skills = ["Escape Artist +10", "Perception +4", "Stealth +10", "Swim +9"];
            _this.armorclass = 15;
            _this.attack = ["Bite +3 1d6+1", "Tail -2 touch 1d6 electricity"];
            _this.speed = 5;
            _this.cmb = 1;
            _this.cmd = 13;
            _this.fort = 7;
            _this.ref = 5;
            _this.will = 0;
            _this.str = 13;
            _this.dex = 14;
            _this.con = 19;
            _this.int = 1;
            _this.wis = 10;
            _this.cha = 6;
            return _this;
        }
        return ElectricEel;
    }(animal_1.Animal));
    exports.ElectricEel = ElectricEel;
});
//# sourceMappingURL=electriceel.js.map