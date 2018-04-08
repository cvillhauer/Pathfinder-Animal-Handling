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
    var Wolverine = /** @class */ (function (_super) {
        __extends(Wolverine, _super);
        function Wolverine(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Wolverine";
            _this.image = "http://animaldiversity.org/collections/contributors/Grzimek_mammals/Mustelidae/gulo_gulo/medium.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wolverine.html#wolverine";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "burrow 10ft", "climb 10ft"];
            _this.skills = ["Climb +10", "Perception +10"];
            _this.armorclass = 14;
            _this.attack = ["Bite +4 1d4+2", "Claw +4 1d6+2", "Claw +4 1d4+2", "Rage when damaged"];
            _this.speed = 30;
            _this.cmb = 4;
            _this.cmd = 16;
            _this.fort = 5;
            _this.ref = 5;
            _this.will = 2;
            _this.str = 15;
            _this.dex = 15;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return Wolverine;
    }(creature_1.Creature));
    exports.Wolverine = Wolverine;
});
//# sourceMappingURL=wolverine.js.map