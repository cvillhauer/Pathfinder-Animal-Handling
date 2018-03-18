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
    var MonitorLizard = /** @class */ (function (_super) {
        __extends(MonitorLizard, _super);
        function MonitorLizard(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Monitor Lizard";
            _this.image = "https://78.media.tumblr.com/7048d9a0164e8f270544c4d8e51f4258/tumblr_nw5v2y2hyk1uqhshmo1_1280.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/lizard.html#lizard-monitor";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Medium;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "swim 30ft"];
            _this.skills = ["Climb +7", "Perception +8", "Stealth +10", "Swim +11"];
            _this.armorclass = 15;
            _this.attack = ["Bite +5 1d8+4 plus grab", "Grapple +9", "Poison DC 14 1d2 Dex onset 1 minute"];
            _this.speed = 30;
            _this.cmb = 5;
            _this.cmd = 17;
            _this.fort = 8;
            _this.ref = 5;
            _this.will = 2;
            _this.str = 17;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return MonitorLizard;
    }(animal_1.Animal));
    exports.MonitorLizard = MonitorLizard;
});
//# sourceMappingURL=monitorlizard.js.map