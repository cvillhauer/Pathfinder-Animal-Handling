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
    var GiantCentipede = /** @class */ (function (_super) {
        __extends(GiantCentipede, _super);
        function GiantCentipede(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Centipede";
            _this.image = "https://ironbombs.files.wordpress.com/2014/03/giant-centipede-smaller.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/centipede.html#centipede-giant";
            _this.hitpoints = ko.observable(5);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "immune to mind affects", "climb 40ft"];
            _this.skills = ["Climb +10", "Perception +4", "Stealth +10"];
            _this.armorclass = 14;
            _this.attack = ["Bite +2 1d6-1", "Poison DC 13 1d3 Dex"];
            _this.speed = 40;
            _this.cmb = 0;
            _this.cmd = 11;
            _this.fort = 3;
            _this.ref = 2;
            _this.will = 0;
            _this.str = 9;
            _this.dex = 15;
            _this.con = 12;
            _this.int = 0;
            _this.wis = 10;
            _this.cha = 2;
            return _this;
        }
        return GiantCentipede;
    }(animal_1.Animal));
    exports.GiantCentipede = GiantCentipede;
});
//# sourceMappingURL=giantcentipede.js.map