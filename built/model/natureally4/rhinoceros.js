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
    var Rhinoceros = /** @class */ (function (_super) {
        __extends(Rhinoceros, _super);
        function Rhinoceros(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Rhinoceros";
            _this.image = "https://pre00.deviantart.net/dda4/th/pre/i/2013/049/2/1/rhinoceros_by_prodigyduck-d5ve638.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/rhinoceros.html#rhinoceros";
            _this.hitpoints = ko.observable(42);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["scent", "reach 5ft"];
            _this.skills = ["Perception +12"];
            _this.armorclass = 16;
            _this.attack = ["Gore +8 2d6+9", "Powerful Charge - Gore 4d6+12"];
            _this.speed = 40;
            _this.cmb = 10;
            _this.cmd = 20;
            _this.fort = 10;
            _this.ref = 4;
            _this.will = 2;
            _this.str = 22;
            _this.dex = 10;
            _this.con = 19;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 5;
            return _this;
        }
        return Rhinoceros;
    }(creature_1.Creature));
    exports.Rhinoceros = Rhinoceros;
});
//# sourceMappingURL=rhinoceros.js.map