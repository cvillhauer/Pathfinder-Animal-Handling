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
    var GrizzlyBear = /** @class */ (function (_super) {
        __extends(GrizzlyBear, _super);
        function GrizzlyBear(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Grizzly Bear";
            _this.image = "https://i.pinimg.com/originals/92/19/d3/9219d3574771f8a02004bd9279022dd4.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bear.html#bear-grizzly";
            _this.hitpoints = ko.observable(42);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "reach 5ft"];
            _this.skills = ["Perception +6", "Survival +5", "Swim +14"];
            _this.armorclass = 16;
            _this.attack = ["Claw +7 1d6+5 plus grab", "Claw +7 1d6+5 plus grab", "Grapple +13", "Bite +7 1d6+5"];
            _this.speed = 40;
            _this.cmb = 9;
            _this.cmd = 20;
            _this.fort = 8;
            _this.ref = 5;
            _this.will = 2;
            _this.str = 21;
            _this.dex = 13;
            _this.con = 19;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return GrizzlyBear;
    }(animal_1.Animal));
    exports.GrizzlyBear = GrizzlyBear;
});
//# sourceMappingURL=grizzlybear.js.map