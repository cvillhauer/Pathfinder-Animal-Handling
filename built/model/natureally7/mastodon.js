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
    var Mastodon = /** @class */ (function (_super) {
        __extends(Mastodon, _super);
        function Mastodon(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Mastodon";
            _this.image = "https://i.pinimg.com/originals/2e/a5/f4/2ea5f4fc1c32874a4efe4e9032165909.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elephant.html#elephant-mastodon";
            _this.hitpoints = ko.observable(133);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "power attack", "reach 15ft"];
            _this.skills = ["Perception +24"];
            _this.armorclass = 21;
            _this.attack = ["Gore +21 2d8+12", "Slam +20 2d6+12", "Trample 2d8+18 DC 29"];
            _this.speed = 40;
            _this.cmb = 24;
            _this.cmd = 35;
            _this.fort = 14;
            _this.ref = 10;
            _this.will = 7;
            _this.str = 34;
            _this.dex = 12;
            _this.con = 21;
            _this.int = 2;
            _this.wis = 13;
            _this.cha = 7;
            return _this;
        }
        return Mastodon;
    }(animal_1.Animal));
    exports.Mastodon = Mastodon;
});
//# sourceMappingURL=mastodon.js.map