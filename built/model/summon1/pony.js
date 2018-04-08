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
    var Pony = /** @class */ (function (_super) {
        __extends(Pony, _super);
        function Pony(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Pony";
            _this.image = "https://orig00.deviantart.net/7569/f/2013/252/4/5/tobiano_draft_horse_study_by_charreed-d6lq7pf.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/horse.html#horse-pony";
            _this.hitpoints = ko.observable(13);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "docile"];
            _this.skills = ["Perception +5"];
            _this.armorclass = 11;
            _this.attack = ["Hoof -3 1d3", "Hoof -3 1d3"];
            _this.speed = 40;
            _this.cmb = 2;
            _this.cmd = 13;
            _this.fort = 5;
            _this.ref = 4;
            _this.will = 0;
            _this.str = 12;
            _this.dex = 13;
            _this.con = 14;
            _this.int = 2;
            _this.wis = 11;
            _this.cha = 4;
            return _this;
        }
        return Pony;
    }(creature_1.Creature));
    exports.Pony = Pony;
});
//# sourceMappingURL=pony.js.map