define(["require", "exports", "knockout", "./enums"], function (require, exports, ko, enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Druid = /** @class */ (function () {
        function Druid(name, level) {
            this.name = ko.observable(name);
            this.level = ko.observable(level);
            this.link = "http://paizo.com/pathfinderRPG/prd/coreRulebook/classes/druid.html";
            this.wildShapeSizes = ko.observableArray();
            this.wildShapeTypes = ko.observableArray();
            this.wildShapeTimesPerDay = ko.computed(function () {
                return Math.floor(Math.abs((this.level() - 2)) / 2);
            }, this);
            this.wildShapeDuration = ko.computed(function () {
                if (this.level() >= 4) {
                    return this.level();
                }
                else {
                    return 0;
                }
            }, this);
            this.beastShape = ko.computed(function () {
                if (this.level() >= 8) {
                    return 3;
                }
                else if (this.level() >= 6) {
                    return 2;
                }
                else if (this.level() >= 4) {
                    return 1;
                }
                else {
                    return 0;
                }
            }, this);
            this.elementalBody = ko.computed(function () {
                if (this.level() >= 12) {
                    return 4;
                }
                else if (this.level() >= 10) {
                    return 3;
                }
                else if (this.level() >= 8) {
                    return 2;
                }
                else if (this.level() >= 6) {
                    return 1;
                }
                else {
                    return 0;
                }
            }, this);
            this.plantShape = ko.computed(function () {
                if (this.level() >= 12) {
                    return 3;
                }
                else if (this.level() >= 10) {
                    return 2;
                }
                else if (this.level() >= 8) {
                    return 1;
                }
                else {
                    return 0;
                }
            }, this);
        }
        Druid.prototype.increaseLevel = function (add) {
            this.level(this.level() + add);
            this.calculateWildShapeSizes();
        };
        Druid.prototype.calculateWildShapeSizes = function () {
            this.wildShapeSizes.removeAll();
            this.wildShapeTypes.removeAll();
            if (this.level() >= 4) {
                this.wildShapeSizes.push(enums_1.Size.Medium);
                this.wildShapeSizes.push(enums_1.Size.Small);
                this.wildShapeTypes.push(enums_1.CreatureType.Animal);
            }
            if (this.level() >= 6) {
                this.wildShapeSizes.push(enums_1.Size.Tiny);
                this.wildShapeSizes.push(enums_1.Size.Large);
                this.wildShapeTypes.push(enums_1.CreatureType.Elemental);
            }
            if (this.level() >= 8) {
                this.wildShapeSizes.push(enums_1.Size.Diminutive);
                this.wildShapeSizes.push(enums_1.Size.Huge);
                this.wildShapeTypes.push(enums_1.CreatureType.Plant);
            }
        };
        return Druid;
    }());
    exports.Druid = Druid;
});
//# sourceMappingURL=druid.js.map