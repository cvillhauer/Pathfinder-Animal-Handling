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
    var Tiger = /** @class */ (function (_super) {
        __extends(Tiger, _super);
        function Tiger(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Tiger";
            _this.image = "https://orig00.deviantart.net/b979/f/2012/194/c/9/tiger_by_thedjib-d573nqn.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/tiger.html#tiger";
            _this.hitpoints = ko.observable(45);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
            _this.skills = ["Acrobatics +10", "Perception +8", "Stealth +7", "Swim +11"];
            _this.armorclass = 14;
            _this.attack = ["Bite +9 2d6+6 plus grab", "Grapple +15", "Claw +10 1d8+6 plus grab", "Claw +10 1d8+6 plus grab", "Rake +10 1d8+6", "Rake +10 1d8+6"];
            _this.speed = 40;
            _this.cmb = 11;
            _this.cmd = 23;
            _this.fort = 8;
            _this.ref = 7;
            _this.will = 3;
            _this.str = 23;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Tiger;
    }(animal_1.Animal));
    exports.Tiger = Tiger;
});
//# sourceMappingURL=tiger.js.map