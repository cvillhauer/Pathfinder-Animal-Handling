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
    var PoisonousFrog = /** @class */ (function (_super) {
        __extends(PoisonousFrog, _super);
        function PoisonousFrog(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Poisonous Frog";
            _this.image = "http://static2.paizo.com/image/content/PathfinderACG/PZO6818-Flybreath.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/frog.html#frog-poison";
            _this.hitpoints = ko.observable(4);
            _this.size = enums_1.Size.Tiny;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "swim 20ft"];
            _this.skills = ["Acrobatics +5", "Perception +3", "Stealth +13", "Swim +9"];
            _this.armorclass = 13;
            _this.attack = ["Bite +3 1", "Poison DC 10 1d2 Con"];
            _this.speed = 10;
            _this.cmb = -1;
            _this.cmd = 5;
            _this.fort = 2;
            _this.ref = 3;
            _this.will = -1;
            _this.str = 2;
            _this.dex = 12;
            _this.con = 11;
            _this.int = 1;
            _this.wis = 9;
            _this.cha = 10;
            return _this;
        }
        return PoisonousFrog;
    }(animal_1.Animal));
    exports.PoisonousFrog = PoisonousFrog;
});
//# sourceMappingURL=poisonousfrog.js.map