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
    var ConstrictorSnake = /** @class */ (function (_super) {
        __extends(ConstrictorSnake, _super);
        function ConstrictorSnake(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Constirctor Snake";
            _this.image = "http://www.heliocentric.com.au/images/titanaboa.jpg?crc=253069396";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/snake.html#snake-constrictor";
            _this.hitpoints = ko.observable(19);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["scent", "climb 20ft", "swim 20ft"];
            _this.skills = ["Acrobatics +15", "Climb +11", "Perception +12", "Stealth +11", "Swim +11"];
            _this.armorclass = 15;
            _this.attack = ["Bite +5 1d4+4 plus grab", "Grapple +9", "Constrict 1d4+4"];
            _this.speed = 20;
            _this.cmb = 5;
            _this.cmd = 18;
            _this.fort = 4;
            _this.ref = 6;
            _this.will = 2;
            _this.str = 17;
            _this.dex = 17;
            _this.con = 12;
            _this.int = 1;
            _this.wis = 12;
            _this.cha = 2;
            return _this;
        }
        return ConstrictorSnake;
    }(creature_1.Creature));
    exports.ConstrictorSnake = ConstrictorSnake;
});
//# sourceMappingURL=constrictorsnake.js.map