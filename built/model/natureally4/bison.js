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
    var Bison = /** @class */ (function (_super) {
        __extends(Bison, _super);
        function Bison(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Bison";
            _this.image = "https://img00.deviantart.net/9c0e/i/2012/235/1/9/bison_beast_by_prodigyduck-d5c77mh.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/herdAnimal.html#herd-animal-bison";
            _this.hitpoints = ko.observable(42);
            _this.size = enums_1.Size.Large;
            _this.type = enums_1.CreatureType.Animal;
            _this.abilities = ["low-light vision", "scent", "power attack", "reach 5ft"];
            _this.skills = ["Perception +8"];
            _this.armorclass = 17;
            _this.attack = ["Gore +10 2d6+12", "Trample DC 20 2d6+12", "Stampede"];
            _this.speed = 40;
            _this.cmb = 12;
            _this.cmd = 22;
            _this.fort = 8;
            _this.ref = 4;
            _this.will = 1;
            _this.str = 27;
            _this.dex = 10;
            _this.con = 19;
            _this.int = 2;
            _this.wis = 11;
            _this.cha = 4;
            return _this;
        }
        return Bison;
    }(animal_1.Animal));
    exports.Bison = Bison;
});
//# sourceMappingURL=bison.js.map