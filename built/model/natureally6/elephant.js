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
    var Elephant = /** @class */ (function (_super) {
        __extends(Elephant, _super);
        function Elephant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Elephant";
            _this.image = "https://www.echidnasontheloose.com.au/images/P/elephant_trumpeting_web.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elephant.html#elephant";
            _this.hitpoints = ko.observable(93);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "power attack", "reach 10ft"];
            _this.skills = ["Perception +21"];
            _this.armorclass = 17;
            _this.attack = ["Gore +16 2d8+10", "Slam +16 2d6+10", "Trample DC 25 2d8+15"];
            _this.speed = 40;
            _this.cmb = 20;
            _this.cmd = 30;
            _this.fort = 13;
            _this.ref = 7;
            _this.will = 6;
            _this.str = 30;
            _this.dex = 10;
            _this.con = 19;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 7;
            return _this;
        }
        return Elephant;
    }(animal_1.Animal));
    exports.Elephant = Elephant;
});
//# sourceMappingURL=elephant.js.map