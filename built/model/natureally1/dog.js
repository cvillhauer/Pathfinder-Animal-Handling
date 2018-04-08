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
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dog";
            _this.image = "http://www.beastsofwar.com/wp-content/uploads/2014/10/Guard-Dog.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/dog.html#dog";
            _this.hitpoints = ko.observable(6);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent"];
            _this.skills = ["Acrobatics +1", "Perception +8", "Survival +1"];
            _this.armorclass = 13;
            _this.attack = ["Bite +2 1d4+1"];
            _this.speed = 40;
            _this.cmb = 0;
            _this.cmd = 11;
            _this.fort = 4;
            _this.ref = 3;
            _this.will = 1;
            _this.str = 13;
            _this.dex = 13;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Dog;
    }(creature_1.Creature));
    exports.Dog = Dog;
});
//# sourceMappingURL=dog.js.map