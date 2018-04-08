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
    var SummonNaturesAlly1;
    (function (SummonNaturesAlly1) {
        SummonNaturesAlly1["DireRat"] = "DireRat";
        SummonNaturesAlly1["Dog"] = "Dog";
        SummonNaturesAlly1["Dolphin"] = "Dolphin";
        SummonNaturesAlly1["Eagle"] = "Eagle";
        SummonNaturesAlly1["GiantCentipede"] = "GiantCentipede";
        SummonNaturesAlly1["FireBeetle"] = "FireBeetle";
        SummonNaturesAlly1["Mite"] = "Mite";
        SummonNaturesAlly1["PoisonousFrog"] = "PoisonousFrog";
        SummonNaturesAlly1["Pony"] = "Pony";
        SummonNaturesAlly1["Stirge"] = "Stirge";
        SummonNaturesAlly1["Viper"] = "Viper";
    })(SummonNaturesAlly1 = exports.SummonNaturesAlly1 || (exports.SummonNaturesAlly1 = {}));
    var SummonNaturesAlly2;
    (function (SummonNaturesAlly2) {
        SummonNaturesAlly2["ElementalSmallAir"] = "ElementalSmallAir";
        SummonNaturesAlly2["ElementalSmallEarth"] = "ElementalSmallEarth";
        SummonNaturesAlly2["ElementalSmallFire"] = "ElementalSmallFire";
        SummonNaturesAlly2["ElementalSmallWater"] = "ElementalSmallWater";
        SummonNaturesAlly2["GiantAntWorker"] = "GiantAntWorker";
        SummonNaturesAlly2["GiantFrog"] = "GiantFrog";
        SummonNaturesAlly2["GiantSpider"] = "GiantSpider";
        SummonNaturesAlly2["GoblinDog"] = "GoblinDog";
        SummonNaturesAlly2["Horse"] = "Horse";
        SummonNaturesAlly2["Hyena"] = "Hyena";
        SummonNaturesAlly2["Octopus"] = "Octopus";
        SummonNaturesAlly2["Squid"] = "Squid";
        SummonNaturesAlly2["Wolf"] = "Wolf";
    })(SummonNaturesAlly2 = exports.SummonNaturesAlly2 || (exports.SummonNaturesAlly2 = {}));
    var SummonNaturesAlly3;
    (function (SummonNaturesAlly3) {
        SummonNaturesAlly3["Ape"] = "Ape";
        SummonNaturesAlly3["Auroch"] = "Auroch";
        SummonNaturesAlly3["Boar"] = "Boar";
        SummonNaturesAlly3["Cheetah"] = "Cheetah";
        SummonNaturesAlly3["ConstrictorSnake"] = "ConstrictorSnake";
        SummonNaturesAlly3["Crocodile"] = "Crocodile";
        SummonNaturesAlly3["DireBat"] = "DireBat";
        SummonNaturesAlly3["ElectricEel"] = "ElectricEel";
        SummonNaturesAlly3["GiantAnt"] = "GiantAnt";
        SummonNaturesAlly3["GiantCrab"] = "GiantCrab";
        SummonNaturesAlly3["Leopard"] = "Leopard";
        SummonNaturesAlly3["MonitorLizard"] = "MonitorLizard";
        SummonNaturesAlly3["Shark"] = "Shark";
        SummonNaturesAlly3["Wolverine"] = "Wolverine";
    })(SummonNaturesAlly3 = exports.SummonNaturesAlly3 || (exports.SummonNaturesAlly3 = {}));
    var SummonNaturesAlly4;
    (function (SummonNaturesAlly4) {
        SummonNaturesAlly4["ElementalMediumAir"] = "ElementalMediumAir";
        SummonNaturesAlly4["ElementalMediumEarth"] = "ElementalMediumEarth";
        SummonNaturesAlly4["ElementalMediumFire"] = "ElementalMediumFire";
        SummonNaturesAlly4["ElementalMediumWater"] = "ElementalMediumWater";
        SummonNaturesAlly4["Bison"] = "Bison";
        //Deinonychus = "Deinonychus",
        SummonNaturesAlly4["DireApe"] = "DireApe";
        SummonNaturesAlly4["DireBoar"] = "DireBoar";
        SummonNaturesAlly4["DireWolf"] = "DireWolf";
        SummonNaturesAlly4["GiantAntDrone"] = "GiantAntDrone";
        SummonNaturesAlly4["GiantScorpion"] = "GiantScorpion";
        SummonNaturesAlly4["GiantStagBeetle"] = "GiantStagBeetle";
        SummonNaturesAlly4["GiantWasp"] = "GiantWasp";
        SummonNaturesAlly4["Griffon"] = "Griffon";
        SummonNaturesAlly4["GrizzlyBear"] = "GrizzlyBear";
        SummonNaturesAlly4["Lion"] = "Lion";
        SummonNaturesAlly4["Mephit"] = "Mephit";
        SummonNaturesAlly4["Owlbear"] = "Owlbear";
        //Pteranodon = "Pteranodon",
        SummonNaturesAlly4["Rhinoceros"] = "Rhinoceros";
        SummonNaturesAlly4["Satyr"] = "Satyr";
        SummonNaturesAlly4["Tiger"] = "Tiger";
    })(SummonNaturesAlly4 = exports.SummonNaturesAlly4 || (exports.SummonNaturesAlly4 = {}));
    var SummonNaturesAlly5;
    (function (SummonNaturesAlly5) {
        SummonNaturesAlly5["ElementalLargeAir"] = "ElementalLargeAir";
        SummonNaturesAlly5["ElementalLargeEarth"] = "ElementalLargeEarth";
        SummonNaturesAlly5["ElementalLargeFire"] = "ElementalLargeFire";
        SummonNaturesAlly5["ElementalLargeWater"] = "ElementalLargeWater";
        //Ankylosaurus = "Ankylosaurus",
        SummonNaturesAlly5["Cyclops"] = "Cyclops";
        SummonNaturesAlly5["DireLion"] = "DireLion";
        SummonNaturesAlly5["Ettin"] = "Ettin";
        SummonNaturesAlly5["GiantMorayEel"] = "GiantMorayEel";
        SummonNaturesAlly5["Girallon"] = "Girallon";
        SummonNaturesAlly5["Manticore"] = "Manticore";
        SummonNaturesAlly5["Orca"] = "Orca";
        SummonNaturesAlly5["WoollyRhinoceros"] = "WoollyRhinoceros";
    })(SummonNaturesAlly5 = exports.SummonNaturesAlly5 || (exports.SummonNaturesAlly5 = {}));
    var SummonNaturesAlly6;
    (function (SummonNaturesAlly6) {
        SummonNaturesAlly6["ElementalHugeAir"] = "ElementalHugeAir";
        SummonNaturesAlly6["ElementalHugeEarth"] = "ElementalHugeEarth";
        SummonNaturesAlly6["ElementalHugeFire"] = "ElementalHugeFire";
        SummonNaturesAlly6["ElementalHugeWater"] = "ElementalHugeWater";
        SummonNaturesAlly6["Bulette"] = "Bulette";
        SummonNaturesAlly6["DireBear"] = "DireBear";
        SummonNaturesAlly6["DireTiger"] = "DireTiger";
        //Elasmosaurus = "Elasmosaurus",
        SummonNaturesAlly6["Elephant"] = "Elephant";
        SummonNaturesAlly6["GiantOctopus"] = "GiantOctopus";
        SummonNaturesAlly6["HillGiant"] = "HillGiant";
        //Stegosaurus = "Stegosaurus",
        SummonNaturesAlly6["StoneGiant"] = "StoneGiant";
        //Triceratops = "Triceratops"
    })(SummonNaturesAlly6 = exports.SummonNaturesAlly6 || (exports.SummonNaturesAlly6 = {}));
    var SummonNaturesAlly7;
    (function (SummonNaturesAlly7) {
        SummonNaturesAlly7["ElementalGreaterAir"] = "ElementalGreaterAir";
        SummonNaturesAlly7["ElementalGreaterEarth"] = "ElementalGreaterEarth";
        SummonNaturesAlly7["ElementalGreaterFire"] = "ElementalGreaterFire";
        SummonNaturesAlly7["ElementalGreaterWater"] = "ElementalGreaterWater";
        //Brachiosaurus = "Brachiosaurus",
        SummonNaturesAlly7["DireCrocodile"] = "DireCrocodile";
        SummonNaturesAlly7["DireShark"] = "DireShark";
        SummonNaturesAlly7["FireGiant"] = "FireGiant";
        SummonNaturesAlly7["FrostGiant"] = "FrostGiant";
        SummonNaturesAlly7["GiantSquid"] = "GiantSquid";
        SummonNaturesAlly7["Mastodon"] = "Mastodon";
        SummonNaturesAlly7["Roc"] = "Roc";
        //Tyrannosaurus = "Tyrannosaurus"
    })(SummonNaturesAlly7 = exports.SummonNaturesAlly7 || (exports.SummonNaturesAlly7 = {}));
    var SummonNaturesAlly8;
    (function (SummonNaturesAlly8) {
        SummonNaturesAlly8["ElementalElderAir"] = "ElementalElderAir";
        SummonNaturesAlly8["ElementalElderEarth"] = "ElementalElderEarth";
        SummonNaturesAlly8["ElementalElderFire"] = "ElementalElderFire";
        SummonNaturesAlly8["ElementalElderWater"] = "ElementalElderWater";
        SummonNaturesAlly8["CloudGiant"] = "CloudGiant";
        SummonNaturesAlly8["PurpleWorm"] = "PurpleWorm";
    })(SummonNaturesAlly8 = exports.SummonNaturesAlly8 || (exports.SummonNaturesAlly8 = {}));
    var SummonNaturesAlly9;
    (function (SummonNaturesAlly9) {
        SummonNaturesAlly9["Pixie"] = "Pixie";
        SummonNaturesAlly9["StormGiant"] = "StormGiant";
    })(SummonNaturesAlly9 = exports.SummonNaturesAlly9 || (exports.SummonNaturesAlly9 = {}));
});
//# sourceMappingURL=enums.js.map