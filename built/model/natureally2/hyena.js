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
    var Hyena = /** @class */ (function (_super) {
        __extends(Hyena, _super);
        function Hyena(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Hyena";
            _this.image = "https://i.pinimg.com/736x/da/b1/d1/dab1d17a311616268e8af871f23f1040--hyena-harley-quinn.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/hyena.html#hyena";
            _this.hitpoints = ko.observable(13);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent"];
            _this.skills = ["Perception +8", "Stealth +6"];
            _this.armorclass = 14;
            _this.attack = ["Bite +3 1d6+3 plus trip"];
            _this.speed = 50;
            _this.cmb = 3;
            _this.cmd = 15;
            _this.fort = 5;
            _this.ref = 5;
            _this.will = 1;
            _this.str = 14;
            _this.dex = 15;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 6;
            return _this;
        }
        return Hyena;
    }(creature_1.Creature));
    exports.Hyena = Hyena;
});
//# sourceMappingURL=hyena.js.map