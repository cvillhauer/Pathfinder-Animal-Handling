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
    var GiantAntDrone = /** @class */ (function (_super) {
        __extends(GiantAntDrone, _super);
        function GiantAntDrone(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Ant - Drone";
            _this.image = "https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ant.html#ant-giant";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "scent", "immune to mind affects", "climb 20ft", "fly 30ft"];
            _this.skills = ["Climb +12", "Perception +7", "Survival +7"];
            _this.armorclass = 19;
            _this.attack = ["Bite +5 1d6+4 plus grab", "Grapple +9", "Sting +5 1d4+4", "Poison DC 16 1d2 Str"];
            _this.speed = 50;
            _this.cmb = 5;
            _this.cmd = 15;
            _this.fort = 6;
            _this.ref = 0;
            _this.will = 1;
            _this.str = 18;
            _this.dex = 14;
            _this.con = 21;
            _this.int = 0;
            _this.wis = 17;
            _this.cha = 15;
            return _this;
        }
        return GiantAntDrone;
    }(animal_1.Animal));
    exports.GiantAntDrone = GiantAntDrone;
});
//# sourceMappingURL=giantantdrone.js.map