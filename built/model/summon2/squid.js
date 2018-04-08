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
    var Squid = /** @class */ (function (_super) {
        __extends(Squid, _super);
        function Squid(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Squid";
            _this.image = "https://pre00.deviantart.net/d23c/th/pre/i/2006/228/3/8/ice_element_giant_squid_by_njoo.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/squid.html#squid";
            _this.hitpoints = ko.observable(13);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "jet 240ft"];
            _this.skills = ["Perception +7", "Swim +10"];
            _this.armorclass = 13;
            _this.attack = ["Bite +4 1d3+2", "Tentacles +2 1d4+1 plus grab", "Grapple +8", "Ink Cloud"];
            _this.speed = 60;
            _this.cmb = 4;
            _this.cmd = 16;
            _this.fort = 3;
            _this.ref = 7;
            _this.will = 2;
            _this.str = 15;
            _this.dex = 15;
            _this.con = 11;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 2;
            return _this;
        }
        return Squid;
    }(creature_1.Creature));
    exports.Squid = Squid;
});
//# sourceMappingURL=squid.js.map