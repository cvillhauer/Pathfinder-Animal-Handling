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
    var Cheetah = /** @class */ (function (_super) {
        __extends(Cheetah, _super);
        function Cheetah(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Cheetah";
            _this.image = "https://img00.deviantart.net/bf17/i/2012/238/a/0/cheetah_running_by_prodigyduck-d5chize.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/cat.html#cat-cheetah";
            _this.hitpoints = ko.observable(19);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "sprint"];
            _this.skills = ["Acrobatics +8", "Perception +5", "Stealth +8"];
            _this.armorclass = 15;
            _this.attack = ["Bite +6 1d6+3 plus trip", "Claw +6 1d3+3", "Claw +6 1d3+3"];
            _this.speed = 50;
            _this.cmb = 5;
            _this.cmd = 19;
            _this.fort = 5;
            _this.ref = 7;
            _this.will = 2;
            _this.str = 17;
            _this.dex = 19;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Cheetah;
    }(animal_1.Animal));
    exports.Cheetah = Cheetah;
});
//# sourceMappingURL=cheetah.js.map