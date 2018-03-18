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
    var GiantCrab = /** @class */ (function (_super) {
        __extends(GiantCrab, _super);
        function GiantCrab(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Crab";
            _this.image = "http://2.bp.blogspot.com/_Fwjw80hPmio/TOp2HbokuGI/AAAAAAAACCY/lv_SdLnlcbM/s1600/Tojanida.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/crab.html#crab-giant";
            _this.hitpoints = ko.observable(19);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "immune to mind affects", "water dependency", "swim 20ft"];
            _this.skills = ["Escape Artist +10", "Perception +4", "Stealth +10", "Swim +9"];
            _this.armorclass = 16;
            _this.attack = ["Claw +4 1d4+2 plus grab", "Claw +4 1d4+2 plus grab", "Grapple +8", "Constrict 1d4+2"];
            _this.speed = 30;
            _this.cmb = 4;
            _this.cmd = 15;
            _this.fort = 5;
            _this.ref = 2;
            _this.will = 1;
            _this.str = 15;
            _this.dex = 13;
            _this.con = 14;
            _this.int = 0;
            _this.wis = 10;
            _this.cha = 2;
            return _this;
        }
        return GiantCrab;
    }(animal_1.Animal));
    exports.GiantCrab = GiantCrab;
});
//# sourceMappingURL=giantcrab.js.map