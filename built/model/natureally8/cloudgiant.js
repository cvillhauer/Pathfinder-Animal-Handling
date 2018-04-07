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
    var CloudGiant = /** @class */ (function (_super) {
        __extends(CloudGiant, _super);
        function CloudGiant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Cloud Giant";
            _this.image = "https://i.pinimg.com/originals/8a/09/d8/8a09d81bcdc2d4de2ce59a8c65a9e396.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-cloud";
            _this.hitpoints = ko.observable(168);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "scent", "great cleave", "power attack", "rock catching", "awesome blow", "levitate at will", "reach 15ft"];
            _this.skills = ["Climb +19", "Craft +10", "Diplomacy +9", "Intimidate +26", "Perception +17", "Perform +8"];
            _this.armorclass = 25;
            _this.attack = ["Morningstar +22 4d6+18", "Morningstar +17 4d6+18", "Morningstar +12 4d6+18", "Slam +22 2d6+12", "Slam +22 2d6+12", "Rock Throw +12 2d6+18", "Obscuring Mist", "Fog Cloud"];
            _this.speed = 50;
            _this.cmb = 26;
            _this.cmd = 37;
            _this.fort = 16;
            _this.ref = 6;
            _this.will = 10;
            _this.str = 35;
            _this.dex = 13;
            _this.con = 23;
            _this.int = 12;
            _this.wis = 16;
            _this.cha = 12;
            return _this;
        }
        return CloudGiant;
    }(animal_1.Animal));
    exports.CloudGiant = CloudGiant;
});
//# sourceMappingURL=cloudgiant.js.map