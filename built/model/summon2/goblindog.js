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
    var GoblinDog = /** @class */ (function (_super) {
        __extends(GoblinDog, _super);
        function GoblinDog(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Goblin Dog";
            _this.image = "https://orig00.deviantart.net/e5f8/f/2007/297/a/a/goblin_dog_by_njoo.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/goblinDog.html#goblin-dog";
            _this.hitpoints = ko.observable(9);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "immune to disease"];
            _this.skills = ["Perception +1", "Stealth +6"];
            _this.armorclass = 13;
            _this.attack = ["Bite +2 1d6+3", "Allergic Reaction DC 12"];
            _this.speed = 50;
            _this.cmb = 2;
            _this.cmd = 14;
            _this.fort = 4;
            _this.ref = 4;
            _this.will = 1;
            _this.str = 15;
            _this.dex = 14;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 8;
            return _this;
        }
        return GoblinDog;
    }(creature_1.Creature));
    exports.GoblinDog = GoblinDog;
});
//# sourceMappingURL=goblindog.js.map