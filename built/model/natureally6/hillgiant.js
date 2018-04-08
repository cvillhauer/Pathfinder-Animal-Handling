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
    var HillGiant = /** @class */ (function (_super) {
        __extends(HillGiant, _super);
        function HillGiant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Hill Giant";
            _this.image = "http://3.bp.blogspot.com/-INhvnEpvn_k/VLSc54sheaI/AAAAAAAAAMc/p-CvmiCsB-k/s1600/wallpaper_Giant%2C%2BHill.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-hill";
            _this.hitpoints = ko.observable(85);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "cleave", "power attack", "rock catching", "reach 10ft"];
            _this.skills = ["Climb +10", "Intimidate +12", "Perception +6"];
            _this.armorclass = 21;
            _this.attack = ["Greatclub +14 2d8+10", "Greatclub +9 2d8+10", "Slam +13 1d8+7", "Slam +13 1d8+7", "Rock Throw +6 1d8+10"];
            _this.speed = 40;
            _this.cmb = 15;
            _this.cmd = 24;
            _this.fort = 11;
            _this.ref = 2;
            _this.will = 3;
            _this.str = 25;
            _this.dex = 8;
            _this.con = 19;
            _this.int = 6;
            _this.wis = 10;
            _this.cha = 7;
            return _this;
        }
        return HillGiant;
    }(creature_1.Creature));
    exports.HillGiant = HillGiant;
});
//# sourceMappingURL=hillgiant.js.map