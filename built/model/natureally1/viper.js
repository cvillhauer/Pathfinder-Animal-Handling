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
    var Viper = /** @class */ (function (_super) {
        __extends(Viper, _super);
        function Viper(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Viper";
            _this.image = "https://pre00.deviantart.net/f3fe/th/pre/i/2015/108/b/c/cave_viper_by_bryansyme-d79yo8f.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/familiar.html#viper";
            _this.hitpoints = ko.observable(3);
            _this.size = enums_1.Size.Tiny;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "climb 20ft", "swim 20ft"];
            _this.skills = ["Climb 11", "Perception +9", "Stealth +15", "Swim +11"];
            _this.armorclass = 16;
            _this.attack = ["Bite +5 1d2-2", "Poison DC 9 1d2 Con"];
            _this.speed = 20;
            _this.cmb = 1;
            _this.cmd = 8;
            _this.fort = 1;
            _this.ref = 5;
            _this.will = 1;
            _this.str = 4;
            _this.dex = 17;
            _this.con = 8;
            _this.int = 1;
            _this.wis = 13;
            _this.cha = 2;
            return _this;
        }
        return Viper;
    }(creature_1.Creature));
    exports.Viper = Viper;
});
//# sourceMappingURL=viper.js.map