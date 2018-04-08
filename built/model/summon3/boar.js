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
    var Boar = /** @class */ (function (_super) {
        __extends(Boar, _super);
        function Boar(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Boar";
            _this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Animals/images/Boar.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/boar.html#boar";
            _this.hitpoints = ko.observable(18);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "ferocity"];
            _this.skills = ["Perception +6"];
            _this.armorclass = 14;
            _this.attack = ["Gore +4 1d8+4"];
            _this.speed = 40;
            _this.cmb = 4;
            _this.cmd = 14;
            _this.fort = 6;
            _this.ref = 3;
            _this.will = 1;
            _this.str = 17;
            _this.dex = 10;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 4;
            return _this;
        }
        return Boar;
    }(creature_1.Creature));
    exports.Boar = Boar;
});
//# sourceMappingURL=boar.js.map