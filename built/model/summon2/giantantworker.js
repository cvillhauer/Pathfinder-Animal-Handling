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
    var GiantAntWorker = /** @class */ (function (_super) {
        __extends(GiantAntWorker, _super);
        function GiantAntWorker(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Ant - Worker";
            _this.image = "https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ant.html#ant-giant";
            _this.hitpoints = ko.observable(18);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "scent", "immune to mind affects", "climb 20ft"];
            _this.skills = ["Climb +10", "Perception +5", "Survival +5"];
            _this.armorclass = 15;
            _this.attack = ["Bite +3 1d6+2"];
            _this.speed = 50;
            _this.cmb = 3;
            _this.cmd = 13;
            _this.fort = 6;
            _this.ref = 0;
            _this.will = 1;
            _this.str = 14;
            _this.dex = 10;
            _this.con = 17;
            _this.int = 0;
            _this.wis = 13;
            _this.cha = 11;
            return _this;
        }
        return GiantAntWorker;
    }(creature_1.Creature));
    exports.GiantAntWorker = GiantAntWorker;
});
//# sourceMappingURL=giantantworker.js.map