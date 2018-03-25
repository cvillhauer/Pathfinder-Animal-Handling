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
    var Owlbear = /** @class */ (function (_super) {
        __extends(Owlbear, _super);
        function Owlbear(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Owlbear";
            _this.image = "http://orig03.deviantart.net/126f/f/2009/156/8/5/owl_bear_by_benwootten.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/owlbear.html#owlbear";
            _this.hitpoints = ko.observable(47);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvision 60ft", "low-light vision", "scent", "reach 5ft"];
            _this.skills = ["Perception +12"];
            _this.armorclass = 15;
            _this.attack = ["Claw +8 1d6+4 plus grab", "Claw +8 1d6+4 plus grab", "Grapple +14", "Bite +8 1d6+4"];
            _this.speed = 30;
            _this.cmb = 10;
            _this.cmd = 21;
            _this.fort = 10;
            _this.ref = 5;
            _this.will = 2;
            _this.str = 19;
            _this.dex = 12;
            _this.con = 18;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return Owlbear;
    }(animal_1.Animal));
    exports.Owlbear = Owlbear;
});
//# sourceMappingURL=owlbear.js.map