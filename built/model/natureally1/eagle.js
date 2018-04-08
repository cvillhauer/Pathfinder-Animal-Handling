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
    var Eagle = /** @class */ (function (_super) {
        __extends(Eagle, _super);
        function Eagle(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Eagle";
            _this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Animals/images/EagleLarge.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/eagle.html#eagle";
            _this.hitpoints = ko.observable(5);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision"];
            _this.skills = ["Fly +8", "Perception +10"];
            _this.armorclass = 14;
            _this.attack = ["Talon +3 1d4", "Talon +3 1d4", "Bite +3 1d4"];
            _this.speed = 80;
            _this.cmb = -1;
            _this.cmd = 11;
            _this.fort = 3;
            _this.ref = 4;
            _this.will = 2;
            _this.str = 10;
            _this.dex = 15;
            _this.con = 12;
            _this.int = 2;
            _this.wis = 15;
            _this.cha = 7;
            return _this;
        }
        return Eagle;
    }(creature_1.Creature));
    exports.Eagle = Eagle;
});
//# sourceMappingURL=eagle.js.map