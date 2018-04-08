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
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Horse";
            _this.image = "http://darkfienix.com/wp-content/uploads/2018/01/horse1.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/horse.html#horse";
            _this.hitpoints = ko.observable(15);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 5ft"];
            _this.skills = ["Perception +6"];
            _this.armorclass = 11;
            _this.attack = ["Hoof -2 1d4+1", "Hoof -2 1d4+1"];
            _this.speed = 50;
            _this.cmb = 5;
            _this.cmd = 17;
            _this.fort = 6;
            _this.ref = 5;
            _this.will = 1;
            _this.str = 16;
            _this.dex = 14;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 7;
            return _this;
        }
        return Horse;
    }(creature_1.Creature));
    exports.Horse = Horse;
});
//# sourceMappingURL=horse.js.map