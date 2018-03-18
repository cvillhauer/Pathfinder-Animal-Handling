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
    var GiantSpider = /** @class */ (function (_super) {
        __extends(GiantSpider, _super);
        function GiantSpider(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Spider";
            _this.image = "https://i.pinimg.com/736x/2f/42/9d/2f429d7c217e618be3ad75b88ddeac29--spider-art-giant-spider.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/spider.html#spider-giant";
            _this.hitpoints = ko.observable(16);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Vermin;
            _this.abilities = ["darkvision 60ft", "tremorsense 60ft", "immune to mind affects", "climb 30ft"];
            _this.skills = ["Climb +16", "Perception +4", "Stealth +7"];
            _this.armorclass = 14;
            _this.attack = ["Bite +2 1d6", "Poison DC 14 1d2 Str", "Web +5 DC 12, 2hp"];
            _this.speed = 30;
            _this.cmb = 2;
            _this.cmd = 15;
            _this.fort = 4;
            _this.ref = 4;
            _this.will = 1;
            _this.str = 11;
            _this.dex = 17;
            _this.con = 12;
            _this.int = 0;
            _this.wis = 10;
            _this.cha = 2;
            return _this;
        }
        return GiantSpider;
    }(animal_1.Animal));
    exports.GiantSpider = GiantSpider;
});
//# sourceMappingURL=giantspider.js.map