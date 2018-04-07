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
    var GiantSquid = /** @class */ (function (_super) {
        __extends(GiantSquid, _super);
        function GiantSquid(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Squid";
            _this.image = "http://www.enworld.org/forum/attachment.php?s=3817b782f3fe5ba457c58b2ba7d07097&attachmentid=74571&d=1455562963";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/squid.html#squid-giant";
            _this.hitpoints = ko.observable(102);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "combat reflexes", "jet 260ft", "reach 15ft", "reach 30 ft with tentacles"];
            _this.skills = ["Perception +22", "Swim +15"];
            _this.armorclass = 20;
            _this.attack = ["Bite +14 2d6+7", "Arms +14 1d6+7", "Tentacles +12 4d6+3 plus grab", "Grapple +22", "Constrict 4d6+10", "Ink Cloud"];
            _this.speed = 60;
            _this.cmb = 18;
            _this.cmd = 31;
            _this.fort = 14;
            _this.ref = 13;
            _this.will = 5;
            _this.str = 25;
            _this.dex = 17;
            _this.con = 19;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 2;
            return _this;
        }
        return GiantSquid;
    }(animal_1.Animal));
    exports.GiantSquid = GiantSquid;
});
//# sourceMappingURL=giantsquid.js.map