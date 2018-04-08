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
    var Mephit = /** @class */ (function (_super) {
        __extends(Mephit, _super);
        function Mephit(name, rounds) {
            var _this = _super.call(this, name, rounds) || this;
            var mephitType = prompt("What Mephit type? \r\n Air, Dust, Earth, Fire, Ice, Magma, Ooze, Salt, Steam, Water").toLowerCase();
            _this.description = "Mephit";
            _this.image = "";
            _this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/mephit.html#";
            _this.hitpoints = ko.observable(19);
            _this.size = enums_1.Size.Small;
            _this.type = enums_1.CreatureType.Outsider;
            _this.abilities = ["darkvision 60ft", "fly 40ft", "fast healing 2 - environment", "DR 5/magic"];
            _this.skills = ["Bluff +8", "Fly +10", "Perception +6", "Stealth +12"];
            _this.armorclass = 17;
            _this.attack = ["Claw +5 1d3+1", "Claw +5 1d3+1", "Summon Mephit 25% chance, once"];
            _this.speed = 30;
            _this.cmb = 3;
            _this.cmd = 15;
            _this.fort = 2;
            _this.ref = 5;
            _this.will = 3;
            _this.str = 13;
            _this.dex = 15;
            _this.con = 12;
            _this.int = 6;
            _this.wis = 11;
            _this.cha = 14;
            switch (mephitType) {
                case "air":
                    _this.image = "https://i.pinimg.com/originals/e8/22/0d/e8220d381913e4c161774b6afffa7b46.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d8 slashing");
                    _this.attack.push("Blur");
                    _this.attack.push("Gust of Wind");
                    break;
                case "dust":
                    _this.image = "https://i.pinimg.com/736x/2a/a7/00/2aa70036fe0010f537ebf0439cfaeac2--monster-art-concept-art.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d4 plus sickened 3 rounds");
                    _this.attack.push("Blur");
                    _this.attack.push("Wind Wall");
                    break;
                case "earth":
                    _this.image = "https://s-media-cache-ak0.pinimg.com/originals/ce/35/35/ce3535c37cbb746ed8a27d21ede3b5a9.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d8 blugeoning");
                    _this.abilities.push("enlarge person, self");
                    _this.abilities.push("soften earth and stone");
                    break;
                case "fire":
                    _this.image = "https://i.pinimg.com/originals/1f/68/a1/1f68a1423da784f8e8ee02614df78d34.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d8 fire");
                    _this.attack.push("Scorching Ray");
                    _this.attack.push("Heat Metal DC 14");
                    _this.abilities.push("immune to fire");
                    _this.abilities.push("vulnerable to cold");
                    break;
                case "ice":
                    _this.image = "https://i.pinimg.com/originals/38/91/08/389108771354b5802a702ad951e00e66.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d4 cold plus sickened 3 rounds");
                    _this.attack.push("Magic Missile");
                    _this.attack.push("Chill Metal DC 14");
                    _this.abilities.push("immune to cold");
                    _this.abilities.push("vulnerable to fire");
                    break;
                case "magma":
                    _this.image = "https://i.pinimg.com/originals/4f/84/74/4f8474dd5804eb1abe7aaa7df04bf303.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d8 fire");
                    _this.attack.push("Pyrotechnics");
                    _this.abilities.push("immune to fire");
                    _this.abilities.push("vulnerable to cold");
                    _this.abilities.push("magma form");
                    break;
                case "ooze":
                    _this.image = "https://mimir.net/mephits/smoke.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d4 acid plus sickened 3 rounds");
                    _this.attack.push("Acid Arrow");
                    _this.attack.push("Stinking Cloud");
                    _this.abilities.push("swim 30ft");
                    break;
                case "salt":
                    _this.image = "https://img00.deviantart.net/452e/i/2015/108/5/2/dust_mephit_by_prodigyduck-d7b24m2.png";
                    _this.attack.push("Breath 15ft cone DC 13 1d4 slashing plus sickened 3 rounds");
                    _this.attack.push("Glitterdust");
                    _this.attack.push("Dehydrate");
                    break;
                case "steam":
                    _this.image = "https://i.pinimg.com/originals/a9/c2/6d/a9c26d36c8ec7a1535bfb3fd151c0a60.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d4 fire plus sickened 3 rounds");
                    _this.attack.push("Blur");
                    _this.attack.push("Boiling Rain");
                    _this.abilities.push("immune to fire");
                    _this.abilities.push("vulnerable to cold");
                    break;
                case "water":
                    _this.image = "https://i.pinimg.com/originals/5c/5e/86/5c5e8657ffc0133e7da9e970ccb8450a.jpg";
                    _this.attack.push("Breath 15ft cone DC 13 1d8 acid");
                    _this.attack.push("Acid Arrow");
                    _this.attack.push("Stinking Cloud");
                    _this.abilities.push("swim 30ft");
                    break;
            }
            return _this;
        }
        return Mephit;
    }(creature_1.Creature));
    exports.Mephit = Mephit;
});
//# sourceMappingURL=mephit.js.map