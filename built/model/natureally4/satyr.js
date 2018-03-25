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
    var Satyr = /** @class */ (function (_super) {
        __extends(Satyr, _super);
        function Satyr(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Satyr";
            _this.image = "http://orig01.deviantart.net/4eaa/f/2009/296/a/4/satyr_for_paizo_publishing_by_michaeljaecks.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/satyr.html#satyr";
            _this.hitpoints = ko.observable(44);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Fey;
            _this.abilities = ["low-light vision", "DR 5/cold iron"];
            _this.skills = ["Bluff +15", "Diplomacy +15", "Disguise +9", "Intimidate +9", "Know nature +10", "Perception +10", "Perform +19", "Stealth +17", "Survival +7"];
            _this.armorclass = 18;
            _this.attack = ["Dagger +6 1d4+2", "Horns +1 1d6+1", "Short Bow +6 1d6", "Pipes DC 18", "Fear DC 18", "Summon Nature's Ally III"];
            _this.speed = 40;
            _this.cmb = 6;
            _this.cmd = 18;
            _this.fort = 4;
            _this.ref = 8;
            _this.will = 8;
            _this.str = 14;
            _this.dex = 15;
            _this.con = 15;
            _this.int = 12;
            _this.wis = 14;
            _this.cha = 19;
            return _this;
        }
        return Satyr;
    }(animal_1.Animal));
    exports.Satyr = Satyr;
});
//# sourceMappingURL=satyr.js.map