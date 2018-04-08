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
    var Lion = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Lion";
            _this.image = "https://vignette.wikia.nocookie.net/greyhawk-chronicles/images/a/ad/Lion-animal.jpg/revision/latest?cb=20160306185717";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/lion.html#lion";
            _this.hitpoints = ko.observable(32);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
            _this.skills = ["Acrobatics +11", "Perception +9", "Stealth +8"];
            _this.armorclass = 15;
            _this.attack = ["Bite +7 1d8+5 plus grab", "Grapple +13", "Claw +7 1d4+5", "Claw +7 1d4+5", "Rake +7 1d4+5", "Rake +7 1d4+5"];
            _this.speed = 40;
            _this.cmb = 9;
            _this.cmd = 22;
            _this.fort = 6;
            _this.ref = 7;
            _this.will = 2;
            _this.str = 21;
            _this.dex = 17;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Lion;
    }(creature_1.Creature));
    exports.Lion = Lion;
});
//# sourceMappingURL=lion.js.map