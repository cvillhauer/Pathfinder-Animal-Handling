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
    var StormGiant = /** @class */ (function (_super) {
        __extends(StormGiant, _super);
        function StormGiant(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Storm Giant";
            _this.image = "https://i.pinimg.com/originals/5d/f4/d9/5df4d9ae358f8925edf0c3fb69162bfa.jpg";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-storm";
            _this.hitpoints = ko.observable(199);
            _this.size = enums_1.Size.Huge;
            _this.type = enums_1.CreatureType.Humanoid;
            _this.abilities = ["low-light vision", "great cleave", "power attack", "combat reflexes", "water breathing", "rock catching", "immune to electricity", "freedom of movement", "swim 30ft", "reach 15ft"];
            _this.skills = ["Acrobatics +18", "Climb +17", "Craft +13", "Intimidate +20", "Perception +27", "Perform +12", "Sense Motive +24", "Swim +22"];
            _this.armorclass = 28;
            _this.attack = ["Greatsword +27 4d6+21", "Greatsword +22 4d6+21", "Greatsword +17 4d6+21", "Slam +26 2d6+14", "Slam +26 2d6+14", "Longbow +15 3d6+14", "Longbow +10 3d6+14", "Longbow +5 3d6+14", "Call Lightning DC 15", " Chain Lightning DC 18"];
            _this.speed = 35;
            _this.cmb = 30;
            _this.cmd = 42;
            _this.fort = 17;
            _this.ref = 8;
            _this.will = 13;
            _this.str = 39;
            _this.dex = 14;
            _this.con = 23;
            _this.int = 16;
            _this.wis = 20;
            _this.cha = 15;
            return _this;
        }
        return StormGiant;
    }(animal_1.Animal));
    exports.StormGiant = StormGiant;
});
//# sourceMappingURL=stormgiant.js.map