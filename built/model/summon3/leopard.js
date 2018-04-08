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
    var Leopard = /** @class */ (function (_super) {
        __extends(Leopard, _super);
        function Leopard(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Leopard";
            _this.image = "https://orig00.deviantart.net/9c9e/f/2009/335/6/1/6137e380b66d45cdf74ef7d44dbd4386.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/cat.html#cat-leopard";
            _this.hitpoints = ko.observable(19);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "pounce", "climb 20ft"];
            _this.skills = ["Acrobatics +8", "Climb +11", "Perception +5", "Stealth +11"];
            _this.armorclass = 15;
            _this.attack = ["Bite +6 1d6+3 plus grab", "Grapple +9", "Claw +6 1d3+3", "Claw +6 1d3+3", "Rake +6 1d3+3", "Rake +6 1d3+3"];
            _this.speed = 30;
            _this.cmb = 5;
            _this.cmd = 19;
            _this.fort = 5;
            _this.ref = 7;
            _this.will = 2;
            _this.str = 16;
            _this.dex = 19;
            _this.con = 15;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 6;
            return _this;
        }
        return Leopard;
    }(creature_1.Creature));
    exports.Leopard = Leopard;
});
//# sourceMappingURL=leopard.js.map