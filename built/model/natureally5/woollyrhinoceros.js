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
    var WoollyRhinoceros = /** @class */ (function (_super) {
        __extends(WoollyRhinoceros, _super);
        function WoollyRhinoceros(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Woolly Rhinoceros";
            _this.image = "https://vignette.wikia.nocookie.net/shipoffools/images/a/a4/Woolly-Rhino.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/rhinoceros.html#rhinoceros-woolly";
            _this.hitpoints = ko.observable(76);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["scent", "diehard", "reach 5ft"];
            _this.skills = ["Perception +15"];
            _this.armorclass = 19;
            _this.attack = ["Gore +14 2d8+13", "Powerful Charge - Gore 4d8+18", "Trample DC23 2d6+13"];
            _this.speed = 30;
            _this.cmb = 16;
            _this.cmd = 26;
            _this.fort = 13;
            _this.ref = 6;
            _this.will = 3;
            _this.str = 28;
            _this.dex = 10;
            _this.con = 21;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 3;
            return _this;
        }
        return WoollyRhinoceros;
    }(animal_1.Animal));
    exports.WoollyRhinoceros = WoollyRhinoceros;
});
//# sourceMappingURL=woollyrhinoceros.js.map