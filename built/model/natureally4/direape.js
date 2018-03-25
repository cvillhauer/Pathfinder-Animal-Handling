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
    var DireApe = /** @class */ (function (_super) {
        __extends(DireApe, _super);
        function DireApe(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Ape";
            _this.image = "https://pre00.deviantart.net/de32/th/pre/i/2015/302/1/8/dire_ape_by_prodigyduck-d9esof4.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ape.html#ape-dire";
            _this.hitpoints = ko.observable(30);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "climb 30ft", "reach 10ft"];
            _this.skills = ["Acrobatics +6", "Climb +16", "Perception +8", "Stealth +2"];
            _this.armorclass = 15;
            _this.attack = ["Bite +6 1d6+4", "Claw +6 1d4+4", "Claw +6 1d4+4", "Rend 1d4+6", "Rake +6 1d3+3"];
            _this.speed = 30;
            _this.cmb = 8;
            _this.cmd = 20;
            _this.fort = 7;
            _this.ref = 6;
            _this.will = 4;
            _this.str = 19;
            _this.dex = 15;
            _this.con = 16;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 7;
            return _this;
        }
        return DireApe;
    }(animal_1.Animal));
    exports.DireApe = DireApe;
});
//# sourceMappingURL=direape.js.map