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
    var GiantMorayEel = /** @class */ (function (_super) {
        __extends(GiantMorayEel, _super);
        function GiantMorayEel(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Moray Eel";
            _this.image = "https://i.pinimg.com/originals/02/55/98/0255988b0afc03aa7c69a84bd286f428.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/eel.html#eel-giant-moray";
            _this.hitpoints = ko.observable(52);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 10ft"];
            _this.skills = ["Escape Artist +10", "Perception +7", "Stealth +8", "Swim +14"];
            _this.armorclass = 19;
            _this.attack = ["Bite +11 2d6+9 plus grab", "Grapple +16", "Gnaw 2d6+9", "Bite +11 1d6+3"];
            _this.speed = 30;
            _this.cmb = 12;
            _this.cmd = 24;
            _this.fort = 8;
            _this.ref = 9;
            _this.will = 3;
            _this.str = 22;
            _this.dex = 14;
            _this.con = 16;
            _this.int = 1;
            _this.wis = 12;
            _this.cha = 8;
            return _this;
        }
        return GiantMorayEel;
    }(creature_1.Creature));
    exports.GiantMorayEel = GiantMorayEel;
});
//# sourceMappingURL=giantmorayeel.js.map