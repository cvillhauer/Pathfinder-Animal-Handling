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
    var Auroch = /** @class */ (function (_super) {
        __extends(Auroch, _super);
        function Auroch(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Auroch";
            _this.image = "http://www.historyofinformation.com/images/3501a%20Large.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/herdAnimal.html#herd-animal-aurochs";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 5ft"];
            _this.skills = ["Perception +9"];
            _this.armorclass = 13;
            _this.attack = ["Gore +7 1d8+9", "Trample DC 17 2d6+9", "Stampede"];
            _this.speed = 40;
            _this.cmb = 9;
            _this.cmd = 19;
            _this.fort = 6;
            _this.ref = 3;
            _this.will = 1;
            _this.str = 23;
            _this.dex = 10;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 11;
            _this.cha = 4;
            return _this;
        }
        return Auroch;
    }(creature_1.Creature));
    exports.Auroch = Auroch;
});
//# sourceMappingURL=auroch.js.map