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
    var DireWolf = /** @class */ (function (_super) {
        __extends(DireWolf, _super);
        function DireWolf(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Wolf";
            _this.image = "http://1.bp.blogspot.com/-owAXCy78Njo/TbdMuvP5NRI/AAAAAAAAAB0/8nLQ61zbzoQ/s1600/Worg.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wolf.html#wolf-dire";
            _this.hitpoints = ko.observable(37);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 5ft",];
            _this.skills = ["Perception +10", "Stealth +3", "Survival +1"];
            _this.armorclass = 14;
            _this.attack = ["Bite +7 1d8+6 plus trip"];
            _this.speed = 50;
            _this.cmb = 8;
            _this.cmd = 20;
            _this.fort = 7;
            _this.ref = 6;
            _this.will = 2;
            _this.str = 19;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return DireWolf;
    }(animal_1.Animal));
    exports.DireWolf = DireWolf;
});
//# sourceMappingURL=direwolf.js.map