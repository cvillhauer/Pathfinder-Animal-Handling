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
    var PurpleWorm = /** @class */ (function (_super) {
        __extends(PurpleWorm, _super);
        function PurpleWorm(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Purple Worm";
            _this.image = "https://i.pinimg.com/originals/a2/ac/da/a2acda8c35b5a0d9569a592fd96d1ac3.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/purpleWorm.html#purple-worm";
            _this.hitpoints = ko.observable(200);
            _this.size = enums_1.Size.Gargantuan;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvision 60ft", "tremorsense", "power attack", "awesome blow", "burrow 20ft", "swim 10ft", "reach 15ft"];
            _this.skills = ["Perception +18", "Swim +20"];
            _this.armorclass = 26;
            _this.attack = ["Bite +25 4d8+12 plus grab ", "Grapple +36", "Sting +25 2d8+12", "Poison DC 25 1d4 Str", "Swallow Whole 4d8+18, AC 21, 20 hp"];
            _this.speed = 20;
            _this.cmb = 32;
            _this.cmd = 40;
            _this.fort = 17;
            _this.ref = 8;
            _this.will = 4;
            _this.str = 35;
            _this.dex = 6;
            _this.con = 25;
            _this.int = 1;
            _this.wis = 8;
            _this.cha = 8;
            return _this;
        }
        return PurpleWorm;
    }(creature_1.Creature));
    exports.PurpleWorm = PurpleWorm;
});
//# sourceMappingURL=purpleworm.js.map