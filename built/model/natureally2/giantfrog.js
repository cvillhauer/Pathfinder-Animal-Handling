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
    var GiantFrog = /** @class */ (function (_super) {
        __extends(GiantFrog, _super);
        function GiantFrog(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Frog";
            _this.image = "https://vignette.wikia.nocookie.net/rythiae/images/3/35/Giant_Frog_1.jpg/revision/latest?cb=20141125110711";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/frog.html#frog-giant";
            _this.hitpoints = ko.observable(15);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 15ft with tongue", "swim 30ft"];
            _this.skills = ["Acrobatics +9", "Perception +3", "Stealth +5", "Swim +10"];
            _this.armorclass = 12;
            _this.attack = ["Bite +3 1d6+2 plus grab", "Tongue +3 touch grab", "Grapple +7", "Pull 5ft", "Swallow Whole 1d4, AC 10, 1hp"];
            _this.speed = 30;
            _this.cmb = 3;
            _this.cmd = 14;
            _this.fort = 6;
            _this.ref = 6;
            _this.will = -1;
            _this.str = 15;
            _this.dex = 13;
            _this.con = 16;
            _this.int = 1;
            _this.wis = 8;
            _this.cha = 6;
            return _this;
        }
        return GiantFrog;
    }(creature_1.Creature));
    exports.GiantFrog = GiantFrog;
});
//# sourceMappingURL=giantfrog.js.map