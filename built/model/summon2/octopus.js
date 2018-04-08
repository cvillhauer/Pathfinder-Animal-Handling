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
    var Octopus = /** @class */ (function (_super) {
        __extends(Octopus, _super);
        function Octopus(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Octopus";
            _this.image = "https://s-media-cache-ak0.pinimg.com/originals/20/29/38/202938767c7a7befba2974ff753e8ba5.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/octopus.html#octopus";
            _this.hitpoints = ko.observable(13);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "swim 30ft", "jet 200ft"];
            _this.skills = ["Escape Artist +13", "Perception +1", "Stealth +20", "Swim +9"];
            _this.armorclass = 15;
            _this.attack = ["Bite +5 1d3+1", "Poison DC 13 1 Str", "Tentacles +3 grab", "Grapple +5", "Ink Cloud"];
            _this.speed = 20;
            _this.cmb = 1;
            _this.cmd = 14;
            _this.fort = 5;
            _this.ref = 6;
            _this.will = 1;
            _this.str = 12;
            _this.dex = 17;
            _this.con = 14;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 3;
            return _this;
        }
        return Octopus;
    }(creature_1.Creature));
    exports.Octopus = Octopus;
});
//# sourceMappingURL=octopus.js.map