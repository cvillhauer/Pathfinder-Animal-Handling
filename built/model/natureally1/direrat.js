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
    var DireRat = /** @class */ (function (_super) {
        __extends(DireRat, _super);
        function DireRat(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Rat";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/1/12/Dire_rat.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/rat.html#rat-dire";
            _this.hitpoints = ko.observable(5);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "climb 20ft", "swim 20ft"];
            _this.skills = ["Climb +11", "Perception +11", "Stealth +11", "Swim +11"];
            _this.armorclass = 14;
            _this.attack = ["Bite +1 1d4", "Disease - Filth Fever"];
            _this.speed = 40;
            _this.cmb = -1;
            _this.cmd = 12;
            _this.fort = 3;
            _this.ref = 5;
            _this.will = 1;
            _this.str = 10;
            _this.dex = 17;
            _this.con = 12;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 4;
            return _this;
        }
        return DireRat;
    }(creature_1.Creature));
    exports.DireRat = DireRat;
});
//# sourceMappingURL=direrat.js.map