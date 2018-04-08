define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Size;
    (function (Size) {
        Size["Medium"] = "Medium";
        Size["Small"] = "Small";
        Size["Large"] = "Large";
        Size["Tiny"] = "Tiny";
        Size["Huge"] = "Huge";
        Size["Diminutive"] = "Diminutive";
        Size["Gargantuan"] = "Gargantuan";
        Size["Fine"] = "Fine";
        Size["Colossal"] = "Colossal";
    })(Size = exports.Size || (exports.Size = {}));
    var CreatureType;
    (function (CreatureType) {
        CreatureType["Aberration"] = "Aberration";
        CreatureType["Animal"] = "Animal";
        CreatureType["Construct"] = "Construct";
        CreatureType["Dragon"] = "Dragon";
        CreatureType["Elemental"] = "Elemental";
        CreatureType["Fey"] = "Fey";
        CreatureType["Humanoid"] = "Humanoid";
        CreatureType["MagicalBeast"] = "Magical Beast";
        CreatureType["MonstrousHumanoid"] = "Monsterous Humanoid";
        CreatureType["Ooze"] = "Ooze";
        CreatureType["Outsider"] = "Outsider";
        CreatureType["Plant"] = "Plant";
        CreatureType["Undead"] = "Undead";
        CreatureType["Vermin"] = "Vermin";
    })(CreatureType = exports.CreatureType || (exports.CreatureType = {}));
    var Element;
    (function (Element) {
        Element["Air"] = "Air";
        Element["Earth"] = "Earth";
        Element["Fire"] = "Fire";
        Element["Water"] = "Water";
    })(Element = exports.Element || (exports.Element = {}));
    var ElementalType;
    (function (ElementalType) {
        ElementalType["Small"] = "Small";
        ElementalType["Medium"] = "Medium";
        ElementalType["Large"] = "Large";
        ElementalType["Huge"] = "Huge";
        ElementalType["Greater"] = "Greater";
        ElementalType["Elder"] = "Elder";
    })(ElementalType = exports.ElementalType || (exports.ElementalType = {}));
    //TODO: Adding a space in the string description breaks KO databinding for AddCreature
    var Summon1;
    (function (Summon1) {
        Summon1["DireRat"] = "DireRat";
        Summon1["Dog"] = "Dog";
        Summon1["Dolphin"] = "Dolphin";
        Summon1["Eagle"] = "Eagle";
        Summon1["GiantCentipede"] = "GiantCentipede";
        Summon1["FireBeetle"] = "FireBeetle";
        Summon1["Mite"] = "Mite";
        Summon1["PoisonousFrog"] = "PoisonousFrog";
        Summon1["Pony"] = "Pony";
        Summon1["Stirge"] = "Stirge";
        Summon1["Viper"] = "Viper";
    })(Summon1 = exports.Summon1 || (exports.Summon1 = {}));
    var Summon2;
    (function (Summon2) {
        Summon2["ElementalSmallAir"] = "ElementalSmallAir";
        Summon2["ElementalSmallEarth"] = "ElementalSmallEarth";
        Summon2["ElementalSmallFire"] = "ElementalSmallFire";
        Summon2["ElementalSmallWater"] = "ElementalSmallWater";
        Summon2["GiantAntWorker"] = "GiantAntWorker";
        Summon2["GiantFrog"] = "GiantFrog";
        Summon2["GiantSpider"] = "GiantSpider";
        Summon2["GoblinDog"] = "GoblinDog";
        Summon2["Horse"] = "Horse";
        Summon2["Hyena"] = "Hyena";
        Summon2["Octopus"] = "Octopus";
        Summon2["Squid"] = "Squid";
        Summon2["Wolf"] = "Wolf";
    })(Summon2 = exports.Summon2 || (exports.Summon2 = {}));
    var Summon3;
    (function (Summon3) {
        Summon3["Ape"] = "Ape";
        Summon3["Auroch"] = "Auroch";
        Summon3["Boar"] = "Boar";
        Summon3["Cheetah"] = "Cheetah";
        Summon3["ConstrictorSnake"] = "ConstrictorSnake";
        Summon3["Crocodile"] = "Crocodile";
        Summon3["DireBat"] = "DireBat";
        Summon3["ElectricEel"] = "ElectricEel";
        Summon3["GiantAnt"] = "GiantAnt";
        Summon3["GiantCrab"] = "GiantCrab";
        Summon3["Leopard"] = "Leopard";
        Summon3["MonitorLizard"] = "MonitorLizard";
        Summon3["Shark"] = "Shark";
        Summon3["Wolverine"] = "Wolverine";
    })(Summon3 = exports.Summon3 || (exports.Summon3 = {}));
    var Summon4;
    (function (Summon4) {
        Summon4["ElementalMediumAir"] = "ElementalMediumAir";
        Summon4["ElementalMediumEarth"] = "ElementalMediumEarth";
        Summon4["ElementalMediumFire"] = "ElementalMediumFire";
        Summon4["ElementalMediumWater"] = "ElementalMediumWater";
        Summon4["Bison"] = "Bison";
        //Deinonychus = "Deinonychus",
        Summon4["DireApe"] = "DireApe";
        Summon4["DireBoar"] = "DireBoar";
        Summon4["DireWolf"] = "DireWolf";
        Summon4["GiantAntDrone"] = "GiantAntDrone";
        Summon4["GiantScorpion"] = "GiantScorpion";
        Summon4["GiantStagBeetle"] = "GiantStagBeetle";
        Summon4["GiantWasp"] = "GiantWasp";
        Summon4["Griffon"] = "Griffon";
        Summon4["GrizzlyBear"] = "GrizzlyBear";
        Summon4["Lion"] = "Lion";
        Summon4["Mephit"] = "Mephit";
        Summon4["Owlbear"] = "Owlbear";
        //Pteranodon = "Pteranodon",
        Summon4["Rhinoceros"] = "Rhinoceros";
        Summon4["Satyr"] = "Satyr";
        Summon4["Tiger"] = "Tiger";
    })(Summon4 = exports.Summon4 || (exports.Summon4 = {}));
    var Summon5;
    (function (Summon5) {
        Summon5["ElementalLargeAir"] = "ElementalLargeAir";
        Summon5["ElementalLargeEarth"] = "ElementalLargeEarth";
        Summon5["ElementalLargeFire"] = "ElementalLargeFire";
        Summon5["ElementalLargeWater"] = "ElementalLargeWater";
        //Ankylosaurus = "Ankylosaurus",
        Summon5["Cyclops"] = "Cyclops";
        Summon5["DireLion"] = "DireLion";
        Summon5["Ettin"] = "Ettin";
        Summon5["GiantMorayEel"] = "GiantMorayEel";
        Summon5["Girallon"] = "Girallon";
        Summon5["Manticore"] = "Manticore";
        Summon5["Orca"] = "Orca";
        Summon5["WoollyRhinoceros"] = "WoollyRhinoceros";
    })(Summon5 = exports.Summon5 || (exports.Summon5 = {}));
    var Summon6;
    (function (Summon6) {
        Summon6["ElementalHugeAir"] = "ElementalHugeAir";
        Summon6["ElementalHugeEarth"] = "ElementalHugeEarth";
        Summon6["ElementalHugeFire"] = "ElementalHugeFire";
        Summon6["ElementalHugeWater"] = "ElementalHugeWater";
        Summon6["Bulette"] = "Bulette";
        Summon6["DireBear"] = "DireBear";
        Summon6["DireTiger"] = "DireTiger";
        //Elasmosaurus = "Elasmosaurus",
        Summon6["Elephant"] = "Elephant";
        Summon6["GiantOctopus"] = "GiantOctopus";
        Summon6["HillGiant"] = "HillGiant";
        //Stegosaurus = "Stegosaurus",
        Summon6["StoneGiant"] = "StoneGiant";
        //Triceratops = "Triceratops"
    })(Summon6 = exports.Summon6 || (exports.Summon6 = {}));
    var Summon7;
    (function (Summon7) {
        Summon7["ElementalGreaterAir"] = "ElementalGreaterAir";
        Summon7["ElementalGreaterEarth"] = "ElementalGreaterEarth";
        Summon7["ElementalGreaterFire"] = "ElementalGreaterFire";
        Summon7["ElementalGreaterWater"] = "ElementalGreaterWater";
        //Brachiosaurus = "Brachiosaurus",
        Summon7["DireCrocodile"] = "DireCrocodile";
        Summon7["DireShark"] = "DireShark";
        Summon7["FireGiant"] = "FireGiant";
        Summon7["FrostGiant"] = "FrostGiant";
        Summon7["GiantSquid"] = "GiantSquid";
        Summon7["Mastodon"] = "Mastodon";
        Summon7["Roc"] = "Roc";
        //Tyrannosaurus = "Tyrannosaurus"
    })(Summon7 = exports.Summon7 || (exports.Summon7 = {}));
    var Summon8;
    (function (Summon8) {
        Summon8["ElementalElderAir"] = "ElementalElderAir";
        Summon8["ElementalElderEarth"] = "ElementalElderEarth";
        Summon8["ElementalElderFire"] = "ElementalElderFire";
        Summon8["ElementalElderWater"] = "ElementalElderWater";
        Summon8["CloudGiant"] = "CloudGiant";
        Summon8["PurpleWorm"] = "PurpleWorm";
    })(Summon8 = exports.Summon8 || (exports.Summon8 = {}));
    var Summon9;
    (function (Summon9) {
        Summon9["Pixie"] = "Pixie";
        Summon9["StormGiant"] = "StormGiant";
    })(Summon9 = exports.Summon9 || (exports.Summon9 = {}));
});
//# sourceMappingURL=enums.js.map