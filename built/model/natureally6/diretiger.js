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
    var DireTiger = /** @class */ (function (_super) {
        __extends(DireTiger, _super);
        function DireTiger(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Tiger";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/0/05/Tiger.jpg/250px-Tiger.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/tiger.html#tiger-dire";
            _this.hitpoints = ko.observable(105);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
            _this.skills = ["Acrobatics +6", "Perception +12", "Stealth +15", "Swim +13"];
            _this.armorclass = 17;
            _this.attack = ["Bite +18 2d6+8 plus grab", "Grapple +23", "Claw +18 2d4+8 plus grab", "Claw +18 2d4+8 plus grab", "Rake +18 2d4+8", "Rake +18 2d4+8"];
            _this.speed = 40;
            _this.cmb = 19;
            _this.cmd = 31;
            _this.fort = 12;
            _this.ref = 11;
            _this.will = 5;
            _this.str = 27;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return DireTiger;
    }(animal_1.Animal));
    exports.DireTiger = DireTiger;
});
//# sourceMappingURL=diretiger.js.map