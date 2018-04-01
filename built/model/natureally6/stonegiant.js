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
    var StoneGiant = /** @class */ (function (_super) {
        __extends(StoneGiant, _super);
        function StoneGiant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Stone Giant";
            _this.image = "https://i.pinimg.com/originals/3f/bd/07/3fbd07d10ff9d8f900718cd158bfe07a.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-stone";
            _this.hitpoints = ko.observable(102);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["darkvision 60ft", "low-light vision", "improved rock catching", "power attack", "precise shot", "quick draw", "reach 10ft"];
            _this.skills = ["Climb +12", "Intimidate +12", "Perception +12", "Stealth +4"];
            _this.armorclass = 22;
            _this.attack = ["Greatclub +16 2d8+12", "Greatclub +11 2d8+12", "Slam +16 1d8+8", "Slam +16 1d8+8", "Rock Throw +11 1d8+12", "Rock Throw +6 1d8+12"];
            _this.speed = 40;
            _this.cmb = 18;
            _this.cmd = 30;
            _this.fort = 12;
            _this.ref = 6;
            _this.will = 7;
            _this.str = 27;
            _this.dex = 15;
            _this.con = 19;
            _this.int = 10;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return StoneGiant;
    }(animal_1.Animal));
    exports.StoneGiant = StoneGiant;
});
//# sourceMappingURL=stonegiant.js.map