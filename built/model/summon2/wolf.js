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
    var Wolf = /** @class */ (function (_super) {
        __extends(Wolf, _super);
        function Wolf(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Wolf";
            _this.image = "https://vignette.wikia.nocookie.net/rollplaywestmarches/images/3/35/Worg.jpg/revision/latest?cb=20150210055421";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wolf.html#wolf";
            _this.hitpoints = ko.observable(13);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent"];
            _this.skills = ["Perception +8", "Stealth +6", "Survival +1"];
            _this.armorclass = 14;
            _this.attack = ["Bite +2 1d6+1 plus trip"];
            _this.speed = 50;
            _this.cmb = 2;
            _this.cmd = 14;
            _this.fort = 5;
            _this.ref = 5;
            _this.will = 1;
            _this.str = 13;
            _this.dex = 15;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Wolf;
    }(creature_1.Creature));
    exports.Wolf = Wolf;
});
//# sourceMappingURL=wolf.js.map