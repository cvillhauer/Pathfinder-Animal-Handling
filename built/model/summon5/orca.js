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
    var Orca = /** @class */ (function (_super) {
        __extends(Orca, _super);
        function Orca(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dolphin (Orca)";
            _this.image = "https://images-na.ssl-images-amazon.com/images/I/71a4xW%2BgrRL._SX466_.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/dolphin.html#dolphin-orca";
            _this.hitpoints = ko.observable(67);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["blindsight 120ft", "low-light vision", "hold breath", "reach 10ft"];
            _this.skills = ["Perception +19", "Swim +28"];
            _this.armorclass = 16;
            _this.attack = ["Bite +13 2d6+12"];
            _this.speed = 80;
            _this.cmb = 16;
            _this.cmd = 28;
            _this.fort = 9;
            _this.ref = 8;
            _this.will = 5;
            _this.str = 27;
            _this.dex = 15;
            _this.con = 16;
            _this.int = 2;
            _this.wis = 15;
            _this.cha = 6;
            return _this;
        }
        return Orca;
    }(creature_1.Creature));
    exports.Orca = Orca;
});
//# sourceMappingURL=orca.js.map