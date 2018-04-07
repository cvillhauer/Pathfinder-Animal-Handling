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
    var FrostGiant = /** @class */ (function (_super) {
        __extends(FrostGiant, _super);
        function FrostGiant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Frost Giant";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/1/11/Eovath.jpg/250px-Eovath.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-frost";
            _this.hitpoints = ko.observable(133);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "great cleave", "power attack", "rock catching", "immune to cold", "vulnerable to fire", "reach 10ft"];
            _this.skills = ["Climb +13", "Craft +7", "Intimidate +7", "Perception +10", "Stealth +2"];
            _this.armorclass = 21;
            _this.attack = ["Greataxe +18 3d6+13", "Greataxe +13 3d6+13", "Slam +18 1d8+9", "Slam +18 1d8+9", "Rock Throw +9 1d8+13"];
            _this.speed = 40;
            _this.cmb = 20;
            _this.cmd = 29;
            _this.fort = 14;
            _this.ref = 3;
            _this.will = 6;
            _this.str = 29;
            _this.dex = 9;
            _this.con = 20;
            _this.int = 10;
            _this.wis = 14;
            _this.cha = 11;
            return _this;
        }
        return FrostGiant;
    }(animal_1.Animal));
    exports.FrostGiant = FrostGiant;
});
//# sourceMappingURL=frostgiant.js.map