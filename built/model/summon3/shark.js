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
    var Shark = /** @class */ (function (_super) {
        __extends(Shark, _super);
        function Shark(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Shark";
            _this.image = "http://fc09.deviantart.net/fs70/f/2013/308/4/3/pzo1127_shark_by_critical_dean-d6t12cw.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/shark.html#shark";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["blindsense 30ft", "keen scent", "aquatic", "reach 5ft"];
            _this.skills = ["Perception +8", "Swim +11"];
            _this.armorclass = 14;
            _this.attack = ["Bite +5 1d8+4"];
            _this.speed = 60;
            _this.cmb = 7;
            _this.cmd = 18;
            _this.fort = 7;
            _this.ref = 5;
            _this.will = 2;
            _this.str = 17;
            _this.dex = 12;
            _this.con = 13;
            _this.int = 1;
            _this.wis = 12;
            _this.cha = 2;
            return _this;
        }
        return Shark;
    }(creature_1.Creature));
    exports.Shark = Shark;
});
//# sourceMappingURL=shark.js.map