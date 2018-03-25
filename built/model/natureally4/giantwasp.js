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
    var GiantWasp = /** @class */ (function (_super) {
        __extends(GiantWasp, _super);
        function GiantWasp(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Wasp";
            _this.image = "https://ironbombs.files.wordpress.com/2014/03/wasp.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wasp.html#wasp-giant";
            _this.hitpoints = ko.observable(34);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "immune to mind affects", "fly 60ft", "reach 5ft"];
            _this.skills = ["Fly +3", "Perception +9"];
            _this.armorclass = 14;
            _this.attack = ["Sting +6 1d8+6", "Poison DC 18 1d2 Dex"];
            _this.speed = 20;
            _this.cmb = 8;
            _this.cmd = 19;
            _this.fort = 8;
            _this.ref = 2;
            _this.will = 2;
            _this.str = 18;
            _this.dex = 12;
            _this.con = 18;
            _this.int = 0;
            _this.wis = 13;
            _this.cha = 11;
            return _this;
        }
        return GiantWasp;
    }(animal_1.Animal));
    exports.GiantWasp = GiantWasp;
});
//# sourceMappingURL=giantwasp.js.map