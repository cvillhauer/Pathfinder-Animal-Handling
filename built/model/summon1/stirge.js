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
    var Stirge = /** @class */ (function (_super) {
        __extends(Stirge, _super);
        function Stirge(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            _this.description = "Stirge";
            _this.image = "https://vignette1.wikia.nocookie.net/forgottenrealms/images/d/d2/Stirge_-_Lars_Grant-West.jpg/revision/latest?cb=20090218055114";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/stirge.html#stirge";
            _this.hitpoints = ko.observable(5);
            _this.size = enums_1.Size.Tiny;
            _this.type = enums_1.CreatureType.MagicalBeast;
            _this.abilities = ["darkvision 60ft", "low-light vision", "scent"];
            _this.skills = ["Fly +8", "Perception +1", "Stealth +16"];
            _this.armorclass = 16;
            _this.attack = ["Attach +7", "Grapple +11", "Blood Drain 1 Con", "Disease - Filth Fever"];
            _this.speed = 40;
            _this.cmb = 3;
            _this.cmd = 9;
            _this.fort = 2;
            _this.ref = 6;
            _this.will = 1;
            _this.str = 3;
            _this.dex = 19;
            _this.con = 10;
            _this.int = 1;
            _this.wis = 12;
            _this.cha = 6;
            return _this;
        }
        return Stirge;
    }(creature_1.Creature));
    exports.Stirge = Stirge;
});
//# sourceMappingURL=stirge.js.map