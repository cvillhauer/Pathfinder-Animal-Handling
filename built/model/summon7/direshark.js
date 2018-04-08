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
    var DireShark = /** @class */ (function (_super) {
        __extends(DireShark, _super);
        function DireShark(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Dire Shark";
            _this.image = "http://adventureaweek.com/wp-content/uploads/2012/12/shark_dire__forrest_imel.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/shark.html#shark-dire";
            _this.hitpoints = ko.observable(112);
            _this.size = enums_1.Size.Gargantuan;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["blindsense 30ft", "keen scent", "aquatic", "reach 20ft"];
            _this.skills = ["Perception +25", "Swim +18"];
            _this.armorclass = 23;
            _this.attack = ["Bite +17 4d10+15 plus grab", "Grapple +29", "Swallow Whole 2d6+15, AC 17, 11 hp"];
            _this.speed = 60;
            _this.cmb = 25;
            _this.cmd = 37;
            _this.fort = 14;
            _this.ref = 13;
            _this.will = 8;
            _this.str = 30;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 1;
            _this.wis = 12;
            _this.cha = 10;
            return _this;
        }
        return DireShark;
    }(creature_1.Creature));
    exports.DireShark = DireShark;
});
//# sourceMappingURL=direshark.js.map