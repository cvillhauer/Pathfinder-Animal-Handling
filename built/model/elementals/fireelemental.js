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
define(["require", "exports", "knockout", "../enums", "./elemental"], function (require, exports, ko, enums_1, elemental_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FireElemental = /** @class */ (function (_super) {
        __extends(FireElemental, _super);
        function FireElemental(name, rounds, elementalType) {
            var _this = _super.call(this, name, rounds, enums_1.Element.Fire, elementalType) || this;
            _this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/e/e8/Fire_elemental_1.jpg/250px-Fire_elemental_1.jpg";
            _this.abilities.push("immune to fire");
            _this.abilities.push("vulnerable to cold");
            _this.speed = 50;
            _this.calculateStats();
            return _this;
        }
        FireElemental.prototype.calculateStatsSmall = function () {
            this.hitpoints = ko.observable(11);
            this.skills = ["Acrobatics +5", "Climb +4", "Escape Artist +5", "Intimidate +4", "Know planes +1", "Perception +4"];
            this.armorclass = 16;
            this.attack = ["Slam +4 1d4 plus burn", "Burn DC 11 1d4"];
            this.cmb = 1;
            this.cmd = 13;
            this.fort = 3;
            this.ref = 4;
            this.will = 0;
            this.str = 10;
            this.dex = 13;
            this.con = 10;
            this.int = 4;
            this.wis = 11;
            this.cha = 11;
        };
        FireElemental.prototype.calculateStatsMedium = function () {
            this.hitpoints = ko.observable(30);
            this.skills = ["Acrobatics +8", "Climb +5", "Escape Artist +8", "Intimidate +5", "Know planes +1", "Perception +7"];
            this.armorclass = 17;
            this.attack = ["Slam +7 1d6+1 plus burn", "Burn DC 16 1d6"];
            this.cmb = 5;
            this.cmd = 19;
            this.fort = 6;
            this.ref = 7;
            this.will = 1;
            this.str = 12;
            this.dex = 17;
            this.con = 14;
            this.int = 4;
            this.wis = 11;
            this.cha = 11;
        };
        FireElemental.prototype.calculateStatsLarge = function () {
            this.hitpoints = ko.observable(60);
            this.abilities.push("DR 5/-");
            this.abilities.push("reach 10ft");
            this.skills = ["Acrobatics +14", "Climb +9", "Escape Artist +12", "Intimidate +9", "Know planes +5", "Perception +11"];
            this.armorclass = 19;
            this.attack = ["Slam +12 1d8+2 plus burn", "Slam +12 1d8+2 plus burn", "Burn DC 16 1d8"];
            this.cmb = 11;
            this.cmd = 27;
            this.fort = 8;
            this.ref = 11;
            this.will = 4;
            this.str = 14;
            this.dex = 21;
            this.con = 14;
            this.int = 6;
            this.wis = 11;
            this.cha = 11;
        };
        FireElemental.prototype.calculateStatsHuge = function () {
            this.hitpoints = ko.observable(85);
            this.abilities.push("combat reflexes");
            this.abilities.push("DR 5/-");
            this.abilities.push("reach 15ft");
            this.skills = ["Acrobatics +16", "Climb +13", "Escape Artist +16", "Intimidate +9", "Know planes +7", "Perception +13"];
            this.armorclass = 21;
            this.attack = ["Slam +15 2d6+4 plus burn", "Slam +15 2d6+4 plus burn", "Burn DC 18 2d6"];
            this.speed = 60;
            this.cmb = 16;
            this.cmd = 34;
            this.fort = 10;
            this.ref = 14;
            this.will = 5;
            this.str = 18;
            this.dex = 25;
            this.con = 16;
            this.int = 6;
            this.wis = 11;
            this.cha = 11;
        };
        FireElemental.prototype.calculateStatsGreater = function () {
            this.hitpoints = ko.observable(123);
            this.abilities.push("combat reflexes");
            this.abilities.push("wind stance");
            this.abilities.push("DR 10/-");
            this.abilities.push("reach 15ft");
            this.skills = ["Acrobatics +23", "Climb +20", "Escape Artist +21", "Intimidate +15", "Know planes +10", "Perception +16"];
            this.armorclass = 23;
            this.attack = ["Slam +19 2d8+7 plus burn", "Slam +19 2d8+7 plus burn", "Burn DC 20 2d8"];
            this.speed = 60;
            this.cmb = 22;
            this.cmd = 41;
            this.fort = 12;
            this.ref = 16;
            this.will = 6;
            this.str = 24;
            this.dex = 27;
            this.con = 18;
            this.int = 8;
            this.wis = 11;
            this.cha = 11;
        };
        FireElemental.prototype.calculateStatsElder = function () {
            this.hitpoints = ko.observable(152);
            this.abilities.push("combat reflexes");
            this.abilities.push("wind stance");
            this.abilities.push("lightning stance");
            this.abilities.push("DR 10/-");
            this.abilities.push("reach 15ft");
            this.skills = ["Acrobatics +28", "Climb +27", "Escape Artist +28", "Intimidate +19", "Know planes +19", "Perception +19"];
            this.armorclass = 26;
            this.attack = ["Slam +23 2d8+8 plus burn", "Slam +23 2d8+8 plus burn", "Burn DC 22 2d10"];
            this.speed = 60;
            this.cmb = 26;
            this.cmd = 46;
            this.fort = 14;
            this.ref = 19;
            this.will = 7;
            this.str = 26;
            this.dex = 29;
            this.con = 18;
            this.int = 10;
            this.wis = 11;
            this.cha = 11;
        };
        return FireElemental;
    }(elemental_1.Elemental));
    exports.FireElemental = FireElemental;
});
//# sourceMappingURL=fireelemental.js.map