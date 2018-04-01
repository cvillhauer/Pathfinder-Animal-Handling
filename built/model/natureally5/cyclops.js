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
    var Cyclops = /** @class */ (function (_super) {
        __extends(Cyclops, _super);
        function Cyclops(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Cyclops";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/9/9d/Aebos.jpg/250px-Aebos.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/cyclops.html#cyclops";
            _this.hitpoints = ko.observable(65);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "ferocity", "reach 10ft", "great cleave", "power attack"];
            _this.skills = ["Intimidate +9", "Perception +11", "Profession soothsayer +10", "Sense Motive +5", "Survival +6"];
            _this.armorclass = 19;
            _this.attack = ["Flash of Insight", "Greataxe +11 3d6+7", "Greataxe +6 3d6+7", "Heavy Crossbow +5 2d8"];
            _this.speed = 30;
            _this.cmb = 13;
            _this.cmd = 22;
            _this.fort = 9;
            _this.ref = 2;
            _this.will = 4;
            _this.str = 21;
            _this.dex = 8;
            _this.con = 15;
            _this.int = 10;
            _this.wis = 13;
            _this.cha = 8;
            return _this;
        }
        return Cyclops;
    }(animal_1.Animal));
    exports.Cyclops = Cyclops;
});
//# sourceMappingURL=cyclops.js.map