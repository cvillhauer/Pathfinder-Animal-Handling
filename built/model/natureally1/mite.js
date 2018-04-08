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
    var Mite = /** @class */ (function (_super) {
        __extends(Mite, _super);
        function Mite(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Mite";
            _this.image = "https://pathfinderwiki.com/mediawiki/images/0/04/Mite.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/mite.html#mite";
            _this.hitpoints = ko.observable(3);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Fey;
            _this.abilities = ["DR 2/cold iron", "light sensitivity", "darkision 120ft", "low-light vision", "scent", "climb 20ft", "hatred dwarf and gnome", "vermin empathy +4"];
            _this.skills = ["Climb +7", "Handle Animal +0", "Perception +5", "Ride +2", "Slight of Hand +9", "Stealth +13"];
            _this.armorclass = 12;
            _this.attack = ["Dagger +0 1d3-1", "Dart +2 1d3-1", "Doom DC 10"];
            _this.speed = 20;
            _this.cmb = -2;
            _this.cmd = 9;
            _this.fort = 0;
            _this.ref = 3;
            _this.will = 3;
            _this.str = 8;
            _this.dex = 13;
            _this.con = 11;
            _this.int = 8;
            _this.wis = 13;
            _this.cha = 8;
            return _this;
        }
        return Mite;
    }(creature_1.Creature));
    exports.Mite = Mite;
});
//# sourceMappingURL=mite.js.map