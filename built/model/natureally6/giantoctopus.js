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
    var GiantOctopus = /** @class */ (function (_super) {
        __extends(GiantOctopus, _super);
        function GiantOctopus(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Giant Octopus";
            _this.image = "https://vignette.wikia.nocookie.net/pathfinder/images/f/ff/Tentacled_horror.jpg/revision/latest?cb=20091122081514";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/octopus.html#octopus-giant";
            _this.hitpoints = ko.observable(90);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "swim 30ft", "jet 200ft", "combat reflexes", "reach 10ft", "reach 20ft with tentacles"];
            _this.skills = ["Escape Artist +18", "Perception +8", "Stealth +18", "Swim +13"];
            _this.armorclass = 18;
            _this.attack = ["Bite +13 1d8+5", "Poison DC 19 1d3 Str", "Tentacles +11 1d4+2 plus grab", "Grapple +19", "Constrict 1d4+2", "Ink Cloud"];
            _this.speed = 20;
            _this.cmb = 15;
            _this.cmd = 27;
            _this.fort = 11;
            _this.ref = 12;
            _this.will = 7;
            _this.str = 20;
            _this.dex = 15;
            _this.con = 17;
            _this.int = 2;
            _this.wis = 12;
            _this.cha = 3;
            return _this;
        }
        return GiantOctopus;
    }(animal_1.Animal));
    exports.GiantOctopus = GiantOctopus;
});
//# sourceMappingURL=giantoctopus.js.map