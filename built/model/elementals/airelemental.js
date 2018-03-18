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
    var AirElemental = /** @class */ (function (_super) {
        __extends(AirElemental, _super);
        function AirElemental(name, rounds, elementalType) {
            var _this = _super.call(this, name, rounds, enums_1.Element.Air, elementalType) || this;
            _this.image = "http://cdn.obsidianportal.com/assets/94811/windelemental.jpg";
            _this.abilities.push("fly 100ft, perfect");
            _this.abilities.push("air mastery");
            _this.speed = 100;
            _this.calculateStats();
            return _this;
        }
        AirElemental.prototype.calculateStatsSmall = function () {
            this.hitpoints = ko.observable(13);
            this.skills = ["Acrobatics +7", "Escape Artist +7", "Fly +17", "Know planes +1", "Perception +4", "Stealth +11"];
            this.armorclass = 17;
            this.attack = ["Slam +6 1d4+1", "Flyby Attack", "Whirlwind DC 12"];
            this.cmb = 2;
            this.cmd = 15;
            this.fort = 4;
            this.ref = 6;
            this.will = 0;
            this.str = 12;
            this.dex = 17;
            this.con = 12;
            this.int = 4;
            this.wis = 11;
            this.cha = 11;
        };
        AirElemental.prototype.calculateStatsMedium = function () {
            this.hitpoints = ko.observable(30);
            this.skills = ["Acrobatics +11", "Escape Artist +9", "Fly +17", "Know planes +1", "Perception +7", "Stealth +10"];
            this.armorclass = 19;
            this.attack = ["Slam +9 1d6+3", "Flyby Attack", "Whirlwind DC 14"];
            this.cmb = 6;
            this.cmd = 22;
            this.fort = 6;
            this.ref = 9;
            this.will = 1;
            this.str = 14;
            this.dex = 21;
            this.con = 14;
            this.int = 4;
            this.wis = 11;
            this.cha = 11;
        };
        AirElemental.prototype.calculateStatsLarge = function () {
            this.hitpoints = ko.observable(68);
            this.abilities.push("combat reflexes");
            this.abilities.push("DR 5/-");
            this.abilities.push("reach 10ft");
            this.skills = ["Acrobatics +15", "Escape Artist +15", "Fly +21", "Know planes +5", "Perception +11", "Stealth +11"];
            this.armorclass = 21;
            this.attack = ["Slam +14 1d8+4", "Slam +14 1d8+4", "Flyby Attack", "Whirlwind DC 18"];
            this.cmb = 13;
            this.cmd = 31;
            this.fort = 9;
            this.ref = 13;
            this.will = 2;
            this.str = 18;
            this.dex = 25;
            this.con = 16;
            this.int = 6;
            this.wis = 11;
            this.cha = 11;
        };
        AirElemental.prototype.calculateStatsHuge = function () {
            this.hitpoints = ko.observable(95);
            this.abilities.push("combat reflexes");
            this.abilities.push("DR 5/-");
            this.abilities.push("reach 15ft");
            this.skills = ["Acrobatics +18", "Escape Artist +18", "Fly +23", "Know planes +7", "Perception +13", "Stealth +9"];
            this.armorclass = 22;
            this.attack = ["Slam +17 2d6+6", "Slam +17 2d6+6", "Flyby Attack", "Whirlwind DC 21"];
            this.cmb = 18;
            this.cmd = 38;
            this.fort = 11;
            this.ref = 16;
            this.will = 5;
            this.str = 22;
            this.dex = 29;
            this.con = 18;
            this.int = 6;
            this.wis = 11;
            this.cha = 11;
        };
        AirElemental.prototype.calculateStatsGreater = function () {
            this.hitpoints = ko.observable(123);
            this.abilities.push("combat reflexes");
            this.abilities.push("power attack");
            this.abilities.push("DR 10/-");
            this.abilities.push("reach 15ft");
            this.skills = ["Acrobatics +25", "Escape Artist +23", "Fly +27", "Know planes +12", "Perception +16", "Stealth +15"];
            this.armorclass = 25;
            this.attack = ["Slam +21 2d8+7", "Slam +21 2d8+7", "Flyby Attack", "Whirlwind DC 23"];
            this.cmb = 22;
            this.cmd = 43;
            this.fort = 12;
            this.ref = 18;
            this.will = 6;
            this.str = 24;
            this.dex = 31;
            this.con = 18;
            this.int = 8;
            this.wis = 11;
            this.cha = 11;
        };
        AirElemental.prototype.calculateStatsElder = function () {
            this.hitpoints = ko.observable(152);
            this.abilities.push("combat reflexes");
            this.abilities.push("power attack");
            this.abilities.push("DR 10/-");
            this.abilities.push("reach 15ft");
            this.skills = ["Acrobatics +30", "Escape Artist +30", "Fly +34", "Know planes +19", "Perception +19", "Stealth +22"];
            this.armorclass = 28;
            this.attack = ["Slam +25 2d8+9", "Slam +25 2d8+9", "Flyby Attack", "Whirlwind DC 27"];
            this.cmb = 27;
            this.cmd = 49;
            this.fort = 14;
            this.ref = 21;
            this.will = 7;
            this.str = 28;
            this.dex = 33;
            this.con = 18;
            this.int = 10;
            this.wis = 11;
            this.cha = 11;
        };
        return AirElemental;
    }(elemental_1.Elemental));
    exports.AirElemental = AirElemental;
});
//# sourceMappingURL=airelemental.js.map