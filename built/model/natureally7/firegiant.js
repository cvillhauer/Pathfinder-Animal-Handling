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
    var FireGiant = /** @class */ (function (_super) {
        __extends(FireGiant, _super);
        function FireGiant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Fire Giant";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/8/80/Fire_giant_captain.jpg/250px-Fire_giant_captain.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-fire";
            _this.hitpoints = ko.observable(142);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "great cleave", "power attack", "rock catching", "immune to fire", "vulnerable to cold", "reach 10ft"];
            _this.skills = ["Climb +14", "Craft +8", "Intimidate +11", "Perception +14"];
            _this.armorclass = 24;
            _this.attack = ["Greatsword +21 3d6+15", "Greatsword +16 3d6+15", "Greatsword +11 3d6+15", "Slam +20 1d8+10", "Slam +20 1d8+10", "Rock Throw +10 1d8+15 plus 1d6 fire"];
            _this.speed = 30;
            _this.cmb = 22;
            _this.cmd = 31;
            _this.fort = 14;
            _this.ref = 4;
            _this.will = 9;
            _this.str = 31;
            _this.dex = 9;
            _this.con = 21;
            _this.int = 10;
            _this.wis = 14;
            _this.cha = 10;
            return _this;
        }
        return FireGiant;
    }(animal_1.Animal));
    exports.FireGiant = FireGiant;
});
//# sourceMappingURL=firegiant.js.map