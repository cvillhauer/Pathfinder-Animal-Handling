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
    var DireBear = /** @class */ (function (_super) {
        __extends(DireBear, _super);
        function DireBear(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Bear";
            _this.image = "https://i.redd.it/hp95ytei7fez.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bear.html#bear-dire";
            _this.hitpoints = ko.observable(95);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 5ft"];
            _this.skills = ["Perception +12", "Swim +19"];
            _this.armorclass = 18;
            _this.attack = ["Bite +13 1d8+7", "Claw +13 1d6+7 plus grab", "Claw +13 1d6+7 plus grab", "Grapple +19"];
            _this.speed = 40;
            _this.cmb = 15;
            _this.cmd = 26;
            _this.fort = 12;
            _this.ref = 8;
            _this.will = 4;
            _this.str = 25;
            _this.dex = 13;
            _this.con = 21;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return DireBear;
    }(creature_1.Creature));
    exports.DireBear = DireBear;
});
//# sourceMappingURL=direbear.js.map