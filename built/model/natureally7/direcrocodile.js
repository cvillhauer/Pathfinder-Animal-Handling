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
    var DireCrocodile = /** @class */ (function (_super) {
        __extends(DireCrocodile, _super);
        function DireCrocodile(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Crocodile";
            _this.image = "https://orig00.deviantart.net/b2e2/f/2009/201/2/3/sea_crocodile_by_cururo.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/crocodile.html#crocodile-dire";
            _this.hitpoints = ko.observable(138);
            _this.size = enums_1.Size.Gargantuan;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "hold breath", "sprint", "reach 15ft", "swim 30ft"];
            _this.skills = ["Perception +14", "Stealth +0", "Swim +21"];
            _this.armorclass = 21;
            _this.attack = ["Bite +18 3d6+13 plus grab", "Grapple +30", "Tail Slap +13 4d8+6", "Death Roll 3d8+19 plus trip", "Swallow Whole 3d6+13, AC 16, 13"];
            _this.speed = 20;
            _this.cmb = 26;
            _this.cmd = 36;
            _this.fort = 15;
            _this.ref = 8;
            _this.will = 8;
            _this.str = 37;
            _this.dex = 10;
            _this.con = 25;
            _this.int = 1;
            _this.wis = 14;
            _this.cha = 2;
            return _this;
        }
        return DireCrocodile;
    }(animal_1.Animal));
    exports.DireCrocodile = DireCrocodile;
});
//# sourceMappingURL=direcrocodile.js.map