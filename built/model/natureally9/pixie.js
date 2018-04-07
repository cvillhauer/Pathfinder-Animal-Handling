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
    var Pixie = /** @class */ (function (_super) {
        __extends(Pixie, _super);
        function Pixie(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Pixie";
            _this.image = "https://i.pinimg.com/originals/89/e9/8a/89e98a4f062907373b6b3f59d8c84e41.png";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/pixie.html#pixie";
            _this.hitpoints = ko.observable(18);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Fey;
            _this.abilities = ["low-light vision", "invisible at will", "DR 10/cold iron", "spell resistance 15", "detect chaos, evil, good, law", "permanent image", "shield", "fly 60ft"];
            _this.skills = ["Acrobatics +12", "Bluff +10", "Escape Artist +12", "Fly +18", "Know nature +10", "Perception +9", "Sense Motive +9", "Stealth +16", "Use Magic Device +10"];
            _this.armorclass = 18;
            _this.attack = ["Short sword +8 1d4-2", "Longbow +8 1d6-2", "Special Arrows - Sleep, DC 15", "Detect Thoughts DC 15", "Dispel Magic", "Entangle DC 14", "Lesser Confusion DC 14", "Irresistible Dance DC 21"];
            _this.speed = 20;
            _this.cmb = -1;
            _this.cmd = 15;
            _this.fort = 2;
            _this.ref = 9;
            _this.will = 6;
            _this.str = 7;
            _this.dex = 21;
            _this.con = 12;
            _this.int = 16;
            _this.wis = 15;
            _this.cha = 16;
            return _this;
        }
        return Pixie;
    }(animal_1.Animal));
    exports.Pixie = Pixie;
});
//# sourceMappingURL=pixie.js.map