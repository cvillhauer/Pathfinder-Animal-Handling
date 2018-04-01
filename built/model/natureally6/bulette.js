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
    var Bulette = /** @class */ (function (_super) {
        __extends(Bulette, _super);
        function Bulette(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Bulette";
            _this.image = "http://d20pfsrd.opengamingnetwork.com/wp-content/uploads/sites/12/2017/01/bulette-jr.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bulette.html#bulette";
            _this.hitpoints = ko.observable(84);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvision 60ft", "low-light vision", "scent", "tremorsense", "burrow 20ft", "leap", "savage bite", "reach 10ft"];
            _this.skills = ["Acrobatics +17", "Perception +11"];
            _this.armorclass = 22;
            _this.attack = ["Bite +13 2d8+9", "Claw +12 2d6+6", "Claw +12 2d6+6"];
            _this.speed = 40;
            _this.cmb = 16;
            _this.cmd = 28;
            _this.fort = 11;
            _this.ref = 8;
            _this.will = 5;
            _this.str = 23;
            _this.dex = 15;
            _this.con = 20;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 6;
            return _this;
        }
        return Bulette;
    }(animal_1.Animal));
    exports.Bulette = Bulette;
});
//# sourceMappingURL=bulette.js.map