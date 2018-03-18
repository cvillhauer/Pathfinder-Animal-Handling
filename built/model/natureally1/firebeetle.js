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
    var FireBeetle = /** @class */ (function (_super) {
        __extends(FireBeetle, _super);
        function FireBeetle(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Fire Beetle";
            _this.image = "https://wrathofzombie.files.wordpress.com/2017/08/fire-beetle.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/beetle.html#beetle-fire";
            _this.hitpoints = ko.observable(4);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["low-light vision", "immune to mind affects", "luminescence 10ft"];
            _this.skills = ["Fly -2", "Perception +0"];
            _this.armorclass = 12;
            _this.attack = ["Bite +1 1d4"];
            _this.speed = 30;
            _this.cmb = -1;
            _this.cmd = 9;
            _this.fort = 2;
            _this.ref = 0;
            _this.will = 0;
            _this.str = 10;
            _this.dex = 11;
            _this.con = 11;
            _this.int = 0;
            _this.wis = 10;
            _this.cha = 7;
            return _this;
        }
        return FireBeetle;
    }(animal_1.Animal));
    exports.FireBeetle = FireBeetle;
});
//# sourceMappingURL=firebeetle.js.map