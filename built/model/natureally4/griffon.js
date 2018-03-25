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
    var Griffon = /** @class */ (function (_super) {
        __extends(Griffon, _super);
        function Griffon(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Griffon";
            _this.image = "https://pre00.deviantart.net/17d5/th/pre/i/2016/218/0/c/griffin_concept_by_dleoblack-dacx7vx.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/griffon.html#griffon";
            _this.hitpoints = ko.observable(42);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvision 60ft", "low-light vision", "scent", "pounce", "fly 80ft", "reach 5ft"];
            _this.skills = ["Acrobatics +10", "Fly +6", "Perception +12"];
            _this.armorclass = 17;
            _this.attack = ["Bite +8 1d6+3", "Talon +7 1d6+3", "Talon +7 1d6+3", "Rake +7 1d4+3", "Rake +7 1d4+3"];
            _this.speed = 30;
            _this.cmb = 9;
            _this.cmd = 21;
            _this.fort = 7;
            _this.ref = 6;
            _this.will = 4;
            _this.str = 16;
            _this.dex = 15;
            _this.con = 16;
            _this.int = 5;
            _this.wis = 13;
            _this.cha = 8;
            return _this;
        }
        return Griffon;
    }(animal_1.Animal));
    exports.Griffon = Griffon;
});
//# sourceMappingURL=griffon.js.map