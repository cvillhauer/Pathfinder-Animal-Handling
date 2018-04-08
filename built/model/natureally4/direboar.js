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
    var DireBoar = /** @class */ (function (_super) {
        __extends(DireBoar, _super);
        function DireBoar(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Boar";
            _this.image = "https://i2.wp.com/adventureaweek.com/wp-content/uploads/2013/07/Dire-Boar.jpg?ssl=1";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/boar.html#boar-dire";
            _this.hitpoints = ko.observable(42);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "ferocity"];
            _this.skills = ["Perception +12"];
            _this.armorclass = 15;
            _this.attack = ["Gore +8 2d6+9"];
            _this.speed = 40;
            _this.cmb = 10;
            _this.cmd = 20;
            _this.fort = 7;
            _this.ref = 4;
            _this.will = 2;
            _this.str = 23;
            _this.dex = 10;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 8;
            return _this;
        }
        return DireBoar;
    }(creature_1.Creature));
    exports.DireBoar = DireBoar;
});
//# sourceMappingURL=direboar.js.map