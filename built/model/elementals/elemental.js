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
define(["require", "exports", "../enums", "../animal"], function (require, exports, enums_1, animal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Elemental = /** @class */ (function (_super) {
        __extends(Elemental, _super);
        function Elemental(name, rounds, element, elementalType) {
            var _this = _super.call(this, name, rounds) || this;
            _this.element = element;
            _this.elementalType = elementalType;
            _this.description = elementalType + " " + element + " Elemental";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elemental.html";
            _this.size = _this.calculateSize(elementalType);
            _this.type = enums_1.CreatureType.Outsider;
            _this.abilities = ["immune to bleed", "immune to paralysis", "immune to poison", "immune to sleep and stun", "immune to critical hits", "immune to flanking", "immune to sneak attacks", "darkvision 60ft"];
            return _this;
        }
        Elemental.prototype.calculateSize = function (elementalType) {
            var size;
            switch (elementalType) {
                case enums_1.ElementalType.Small:
                    size = enums_1.Size.Small;
                    break;
                case enums_1.ElementalType.Medium:
                    size = enums_1.Size.Medium;
                    break;
                case enums_1.ElementalType.Large:
                    size = enums_1.Size.Large;
                    break;
                case enums_1.ElementalType.Huge:
                case enums_1.ElementalType.Greater:
                case enums_1.ElementalType.Elder:
                    size = enums_1.Size.Huge;
                    break;
            }
            return size;
        };
        Elemental.prototype.calculateStats = function () {
            switch (this.elementalType) {
                case enums_1.ElementalType.Small:
                    this.calculateStatsSmall();
                    break;
                case enums_1.ElementalType.Medium:
                    this.calculateStatsMedium();
                    break;
                case enums_1.ElementalType.Large:
                    this.calculateStatsLarge();
                    break;
                case enums_1.ElementalType.Huge:
                    this.calculateStatsHuge();
                    break;
                case enums_1.ElementalType.Greater:
                    this.calculateStatsGreater();
                    break;
                case enums_1.ElementalType.Elder:
                    this.calculateStatsElder();
                    break;
            }
        };
        Elemental.prototype.calculateStatsSmall = function () {
            //Implemented in subclasses
        };
        Elemental.prototype.calculateStatsMedium = function () {
            //Implemented in subclasses
        };
        Elemental.prototype.calculateStatsLarge = function () {
            //Implemented in subclasses
        };
        Elemental.prototype.calculateStatsHuge = function () {
            //Implemented in subclasses
        };
        Elemental.prototype.calculateStatsGreater = function () {
            //Implemented in subclasses
        };
        Elemental.prototype.calculateStatsElder = function () {
            //Implemented in subclasses
        };
        return Elemental;
    }(animal_1.Animal));
    exports.Elemental = Elemental;
});
//# sourceMappingURL=elemental.js.map