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
    var Roc = /** @class */ (function (_super) {
        __extends(Roc, _super);
        function Roc(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Roc";
            _this.image = "https://s3.amazonaws.com/files.d20.io/images/26465981/FNTWoDwoywoI8T3ekgZK5Q/max.png?1482160532";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/roc.html#roc";
            _this.hitpoints = ko.observable(120);
            _this.size = enums_1.Size.Gargantuan;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "power attack", "fly 80ft", "reach 15ft"];
            _this.skills = ["Fly +7", "Perception +15"];
            _this.armorclass = 22;
            _this.attack = ["Talon +18 2d6+9 plus grab", "Talon +18 2d6+9", "Grapple +29", "Bite +17 2d8+9", "Flyby Attack"];
            _this.speed = 20;
            _this.cmb = 25;
            _this.cmd = 37;
            _this.fort = 13;
            _this.ref = 14;
            _this.will = 8;
            _this.str = 28;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 11;
            return _this;
        }
        return Roc;
    }(creature_1.Creature));
    exports.Roc = Roc;
});
//# sourceMappingURL=roc.js.map