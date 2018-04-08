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
    var Crocodile = /** @class */ (function (_super) {
        __extends(Crocodile, _super);
        function Crocodile(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Crocodile";
            _this.image = "https://78.media.tumblr.com/864cd2f022509d7f566ca9c4fd60cd4a/tumblr_o0n2mahH761uqhshmo1_1280.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/crocodile.html#crocodile";
            _this.hitpoints = ko.observable(22);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "hold breath", "sprint", "reach 5ft", "swim 30ft"];
            _this.skills = ["Perception +8", "Stealth +5", "Swim +12"];
            _this.armorclass = 14;
            _this.attack = ["Bite +5 1d8+4 plus grab", "Grapple +11", "Tail Slap +0 1d12+2", "Death Roll 1d8+6 plus trip"];
            _this.speed = 20;
            _this.cmb = 7;
            _this.cmd = 18;
            _this.fort = 6;
            _this.ref = 4;
            _this.will = 2;
            _this.str = 19;
            _this.dex = 12;
            _this.con = 17;
            _this.int = 1;
            _this.wis = 12;
            _this.cha = 2;
            return _this;
        }
        return Crocodile;
    }(creature_1.Creature));
    exports.Crocodile = Crocodile;
});
//# sourceMappingURL=crocodile.js.map