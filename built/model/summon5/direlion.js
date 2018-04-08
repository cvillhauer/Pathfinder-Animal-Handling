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
    var DireLion = /** @class */ (function (_super) {
        __extends(DireLion, _super);
        function DireLion(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Lion";
            _this.image = "https://i.pinimg.com/originals/bd/29/69/bd2969c22dedba403783d992667adfe8.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/lion.html#lion-dire";
            _this.hitpoints = ko.observable(60);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
            _this.skills = ["Acrobatics +11", "Perception +11", "Stealth +7"];
            _this.armorclass = 15;
            _this.attack = ["Bite +12 1d8+7 plus grab", "Grapple +18", "Claw +13 1d6+7", "Claw +13 1d6+7", "Rake +13 1d6+7", "Rake +13 1d6+7"];
            _this.speed = 40;
            _this.cmb = 14;
            _this.cmd = 26;
            _this.fort = 9;
            _this.ref = 8;
            _this.will = 3;
            _this.str = 25;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return DireLion;
    }(creature_1.Creature));
    exports.DireLion = DireLion;
});
//# sourceMappingURL=direlion.js.map