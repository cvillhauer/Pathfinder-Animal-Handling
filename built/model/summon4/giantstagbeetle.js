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
    var GiantStagBeetle = /** @class */ (function (_super) {
        __extends(GiantStagBeetle, _super);
        function GiantStagBeetle(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Stag Beetle";
            _this.image = "http://karzoug.info/srd/monsters/B/images/BeetleAzlantiChariot.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/beetle.html#beetle-giant-stag";
            _this.hitpoints = ko.observable(45);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "immune to mind affects", "reach 5ft", "fly 20ft"];
            _this.skills = ["Fly -6", "Perception +0"];
            _this.armorclass = 17;
            _this.attack = ["Bite +8 2d8+6", "Trample DC 17 1d6+6"];
            _this.speed = 20;
            _this.cmb = 10;
            _this.cmd = 20;
            _this.fort = 7;
            _this.ref = 2;
            _this.will = 2;
            _this.str = 19;
            _this.dex = 10;
            _this.con = 15;
            _this.int = 0;
            _this.wis = 10;
            _this.cha = 9;
            return _this;
        }
        return GiantStagBeetle;
    }(creature_1.Creature));
    exports.GiantStagBeetle = GiantStagBeetle;
});
//# sourceMappingURL=giantstagbeetle.js.map