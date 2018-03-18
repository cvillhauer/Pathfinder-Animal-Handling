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
define(["require", "exports", "knockout", "../enums", "../animal"], function (require, exports, ko, enums_1, animal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dolphin = /** @class */ (function (_super) {
        __extends(Dolphin, _super);
        function Dolphin(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dolphin";
            _this.image = "http://d2ydh70d4b5xgv.cloudfront.net/images/f/5/safari-ltd-monterey-bay-aquarium-sea-life-collection-bottlenose-dolphin-f2383e6f99e01e61cd2371b00314e98c.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/dolphin.html#dolphin";
            _this.hitpoints = ko.observable(11);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["blindsight 120ft", "low-light vision", "hold breath"];
            _this.skills = ["Perception +9"];
            _this.armorclass = 13;
            _this.attack = ["Slam +3 1d4+1"];
            _this.speed = 80;
            _this.cmb = 2;
            _this.cmd = 14;
            _this.fort = 4;
            _this.ref = 5;
            _this.will = 1;
            _this.str = 12;
            _this.dex = 15;
            _this.con = 13;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Dolphin;
    }(animal_1.Animal));
    exports.Dolphin = Dolphin;
});
//# sourceMappingURL=dolphin.js.map