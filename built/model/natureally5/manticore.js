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
    var Manticore = /** @class */ (function (_super) {
        __extends(Manticore, _super);
        function Manticore(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Manticore";
            _this.image = "https://i.pinimg.com/originals/33/8f/7f/338f7f30d1a199b99b4c2bc7633d0d9c.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/manticore.html#manticore";
            _this.hitpoints = ko.observable(57);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvision 60ft", "low-light vision", "scent", "fly 50ft", "hover", "reach 5ft"];
            _this.skills = ["Fly -3", "Perception +9", "Survival +4"];
            _this.armorclass = 17;
            _this.attack = ["Bite +10 1d8+5", "Claw +10 2d4+5", "Claw +10 2d4+5", "Spikes (x4) +8 1d6+5"];
            _this.speed = 30;
            _this.cmb = 12;
            _this.cmd = 24;
            _this.fort = 9;
            _this.ref = 7;
            _this.will = 3;
            _this.str = 20;
            _this.dex = 15;
            _this.con = 18;
            _this.int = 7;
            _this.wis = 12;
            _this.cha = 9;
            return _this;
        }
        return Manticore;
    }(animal_1.Animal));
    exports.Manticore = Manticore;
});
//# sourceMappingURL=manticore.js.map