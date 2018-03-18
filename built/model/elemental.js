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
define(["require", "exports", "knockout", "./enums", "./animal"], function (require, exports, ko, enums_1, animal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Elemental = /** @class */ (function (_super) {
        __extends(Elemental, _super);
        function Elemental(name, rounds, element, elementalType) {
            var _this = _super.call(this, name, rounds) || this;
            _this.element = element;
            _this.elementalType = elementalType;
            _this.description = elementalType + " " + element + " Elemental";
            _this.image = "";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elemental.html";
            _this.hitpoints = ko.observable(0);
            _this.size = _this.calculateSize(elementalType);
            _this.type = enums_1.CreatureType.Elemental;
            _this.abilities = [];
            _this.skills = [];
            _this.armorclass = 0;
            _this.attack = [];
            _this.speed = 0;
            _this.cmb = 0;
            _this.cmd = 0;
            _this.fort = 0;
            _this.ref = 0;
            _this.will = 0;
            _this.str = 0;
            _this.dex = 0;
            _this.con = 0;
            _this.int = 0;
            _this.wis = 0;
            _this.cha = 0;
            _this.calculateStats(element);
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
        Elemental.prototype.calculateStats = function (element) {
            //TODO calculate things based on element type
            //IE Air elementals have Air Mastery, Earth Elementals have Earth Glide, etc
        };
        return Elemental;
    }(animal_1.Animal));
    exports.Elemental = Elemental;
});
//# sourceMappingURL=elemental.js.map