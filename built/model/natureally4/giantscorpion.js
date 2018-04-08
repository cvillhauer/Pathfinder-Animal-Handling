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
    var GiantScorpion = /** @class */ (function (_super) {
        __extends(GiantScorpion, _super);
        function GiantScorpion(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Scorpion";
            _this.image = "http://images.uesp.net//9/9b/ON-concept-Giant_scorpion.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/scorpion.html#scorpion-giant";
            _this.hitpoints = ko.observable(37);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "tremorsense 60ft", "immune to mind affects", "reach 10ft"];
            _this.skills = ["Climb +8", "Perception +4", "Stealth +0"];
            _this.armorclass = 16;
            _this.attack = ["Claw +6 1d6+4 plus grab", "Claw +6 1d6+4 plus grab", "Grapple +12", "Sting +6 1d6+4 plus poison", "Poison DC 17 1d2 Str", "Constrict 1d6+4"];
            _this.speed = 50;
            _this.cmb = 8;
            _this.cmd = 18;
            _this.fort = 7;
            _this.ref = 1;
            _this.will = 1;
            _this.str = 19;
            _this.dex = 10;
            _this.con = 16;
            _this.int = 0;
            _this.wis = 10;
            _this.cha = 2;
            return _this;
        }
        return GiantScorpion;
    }(creature_1.Creature));
    exports.GiantScorpion = GiantScorpion;
});
//# sourceMappingURL=giantscorpion.js.map