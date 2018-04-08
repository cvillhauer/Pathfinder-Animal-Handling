define(["require", "exports", "knockout", "./model/enums", "./model/enums", "./model/enums", "./model/enums", "./model/elementals/airelemental", "./model/elementals/earthelemental", "./model/elementals/fireelemental", "./model/elementals/waterelemental", "./model/summon1/direrat", "./model/summon1/dog", "./model/summon1/dolphin", "./model/summon1/eagle", "./model/summon1/firebeetle", "./model/summon1/giantcentipede", "./model/summon1/mite", "./model/summon1/poisonousfrog", "./model/summon1/pony", "./model/summon1/stirge", "./model/summon1/viper", "./model/summon2/giantantworker", "./model/summon2/giantfrog", "./model/summon2/giantspider", "./model/summon2/goblindog", "./model/summon2/horse", "./model/summon2/hyena", "./model/summon2/octopus", "./model/summon2/squid", "./model/summon2/wolf", "./model/summon3/ape", "./model/summon3/auroch", "./model/summon3/boar", "./model/summon3/cheetah", "./model/summon3/constrictorsnake", "./model/summon3/crocodile", "./model/summon3/direbat", "./model/summon3/electriceel", "./model/summon3/giantant", "./model/summon3/giantcrab", "./model/summon3/leopard", "./model/summon3/monitorlizard", "./model/summon3/shark", "./model/summon3/wolverine", "./model/summon4/bison", "./model/summon4/direape", "./model/summon4/direboar", "./model/summon4/direwolf", "./model/summon4/giantantdrone", "./model/summon4/giantscorpion", "./model/summon4/giantstagbeetle", "./model/summon4/giantwasp", "./model/summon4/griffon", "./model/summon4/grizzlybear", "./model/summon4/lion", "./model/summon4/mephit", "./model/summon4/owlbear", "./model/summon4/rhinoceros", "./model/summon4/satyr", "./model/summon4/tiger", "./model/summon5/cyclops", "./model/summon5/direlion", "./model/summon5/ettin", "./model/summon5/giantmorayeel", "./model/summon5/girallon", "./model/summon5/manticore", "./model/summon5/orca", "./model/summon5/woollyrhinoceros", "./model/summon6/bulette", "./model/summon6/direbear", "./model/summon6/diretiger", "./model/summon6/elephant", "./model/summon6/giantoctopus", "./model/summon6/hillgiant", "./model/summon6/stonegiant", "./model/summon7/direcrocodile", "./model/summon7/direshark", "./model/summon7/firegiant", "./model/summon7/frostgiant", "./model/summon7/giantsquid", "./model/summon7/mastodon", "./model/summon7/roc", "./model/summon8/cloudgiant", "./model/summon8/purpleworm", "./model/summon9/pixie", "./model/summon9/stormgiant"], function (require, exports, ko, enums_1, enums_2, enums_3, enums_4, airelemental_1, earthelemental_1, fireelemental_1, waterelemental_1, direrat_1, dog_1, dolphin_1, eagle_1, firebeetle_1, giantcentipede_1, mite_1, poisonousfrog_1, pony_1, stirge_1, viper_1, giantantworker_1, giantfrog_1, giantspider_1, goblindog_1, horse_1, hyena_1, octopus_1, squid_1, wolf_1, ape_1, auroch_1, boar_1, cheetah_1, constrictorsnake_1, crocodile_1, direbat_1, electriceel_1, giantant_1, giantcrab_1, leopard_1, monitorlizard_1, shark_1, wolverine_1, bison_1, direape_1, direboar_1, direwolf_1, giantantdrone_1, giantscorpion_1, giantstagbeetle_1, giantwasp_1, griffon_1, grizzlybear_1, lion_1, mephit_1, owlbear_1, rhinoceros_1, satyr_1, tiger_1, cyclops_1, direlion_1, ettin_1, giantmorayeel_1, girallon_1, manticore_1, orca_1, woollyrhinoceros_1, bulette_1, direbear_1, diretiger_1, elephant_1, giantoctopus_1, hillgiant_1, stonegiant_1, direcrocodile_1, direshark_1, firegiant_1, frostgiant_1, giantsquid_1, mastodon_1, roc_1, cloudgiant_1, purpleworm_1, pixie_1, stormgiant_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Summon = /** @class */ (function () {
        function Summon() {
            this.addedCreatureType1 = ko.observable();
            this.addedCreatureType2 = ko.observable();
            this.addedCreatureType3 = ko.observable();
            this.addedCreatureType4 = ko.observable();
            this.addedCreatureType5 = ko.observable();
            this.addedCreatureType6 = ko.observable();
            this.addedCreatureType7 = ko.observable();
            this.addedCreatureType8 = ko.observable();
            this.addedCreatureType9 = ko.observable();
            this.Summon1Choices = ko.observableArray();
            for (var creature in enums_2.Summon1) {
                this.Summon1Choices.push(creature);
            }
            this.Summon2Choices = ko.observableArray();
            for (var creature in enums_2.Summon2) {
                this.Summon2Choices.push(creature);
            }
            this.Summon3Choices = ko.observableArray();
            for (var creature in enums_2.Summon3) {
                this.Summon3Choices.push(creature);
            }
            this.Summon4Choices = ko.observableArray();
            for (var creature in enums_3.Summon4) {
                this.Summon4Choices.push(creature);
            }
            this.Summon5Choices = ko.observableArray();
            for (var creature in enums_3.Summon5) {
                this.Summon5Choices.push(creature);
            }
            this.Summon6Choices = ko.observableArray();
            for (var creature in enums_3.Summon6) {
                this.Summon6Choices.push(creature);
            }
            this.Summon7Choices = ko.observableArray();
            for (var creature in enums_4.Summon7) {
                this.Summon7Choices.push(creature);
            }
            this.Summon8Choices = ko.observableArray();
            for (var creature in enums_4.Summon8) {
                this.Summon8Choices.push(creature);
            }
            this.Summon9Choices = ko.observableArray();
            for (var creature in enums_4.Summon9) {
                this.Summon9Choices.push(creature);
            }
        }
        //TODO: Move RollDice somewhere where both viewmodel and other classes can use it
        Summon.prototype.rollDice = function (numberOfDice, typeOfDice) {
            var result = 0;
            console.log("Rolling " + numberOfDice + "d" + typeOfDice);
            for (var i = 0; i < numberOfDice; i++) {
                var roll = Math.floor(Math.random() * typeOfDice) + 1;
                result += roll;
                console.log("Rolled a " + roll);
            }
            console.log("Total of dice rolls is a " + result);
            return result;
        };
        Summon.prototype.Summon = function (druidLevel, spellLevel, creatureLevel, creatureName) {
            var summonedCreatures = [];
            var numberOfCreatures = 0;
            console.log("Cast Summon " + spellLevel + " for creature level " + creatureLevel);
            //TODO: Add user-visible validation and error messages
            if (spellLevel == 0 || creatureLevel == 0) {
                alert("Please select both a spell level and an creature level.");
            }
            else if (spellLevel < 1 || spellLevel > 9) {
                console.log("Spell level of " + spellLevel + " is invalid.");
            }
            else if (creatureLevel < 1 || creatureLevel > 9 || creatureLevel > spellLevel) {
                console.log("Creature level of " + creatureLevel + " is invalid.");
            }
            else {
                if (spellLevel == creatureLevel) {
                    numberOfCreatures = 1;
                }
                else if (spellLevel > creatureLevel) {
                    if (spellLevel == creatureLevel + 1) {
                        //Summon 1d3 creatures of this level
                        numberOfCreatures = this.rollDice(1, 3);
                    }
                    else {
                        //Summon 1d4+1 creatures of this level
                        numberOfCreatures = this.rollDice(1, 4) + 1;
                    }
                }
                console.log("Summon " + numberOfCreatures + " creatures of this level");
                for (var i = 1; i <= numberOfCreatures; i++) {
                    var newCreature = void 0;
                    switch (creatureLevel) {
                        case 1:
                            newCreature = this.Summon1(creatureName + " " + i, druidLevel, this.addedCreatureType1());
                            break;
                        case 2:
                            newCreature = this.Summon2(creatureName + " " + i, druidLevel, this.addedCreatureType2());
                            break;
                        case 3:
                            newCreature = this.Summon3(creatureName + " " + i, druidLevel, this.addedCreatureType3());
                            break;
                        case 4:
                            newCreature = this.Summon4(creatureName + " " + i, druidLevel, this.addedCreatureType4());
                            break;
                        case 5:
                            newCreature = this.Summon5(creatureName + " " + i, druidLevel, this.addedCreatureType5());
                            break;
                        case 6:
                            newCreature = this.Summon6(creatureName + " " + i, druidLevel, this.addedCreatureType6());
                            break;
                        case 7:
                            newCreature = this.Summon7(creatureName + " " + i, druidLevel, this.addedCreatureType7());
                            break;
                        case 8:
                            newCreature = this.Summon8(creatureName + " " + i, druidLevel, this.addedCreatureType8());
                            break;
                        case 9:
                            newCreature = this.Summon9(creatureName + " " + i, druidLevel, this.addedCreatureType9());
                            break;
                    }
                    if (newCreature != undefined) {
                        summonedCreatures.push(newCreature);
                    }
                }
                if (summonedCreatures.length > 0) {
                    this.addedCreatureType1(undefined);
                    this.addedCreatureType2(undefined);
                    this.addedCreatureType3(undefined);
                    this.addedCreatureType4(undefined);
                    this.addedCreatureType5(undefined);
                    this.addedCreatureType6(undefined);
                    this.addedCreatureType7(undefined);
                    this.addedCreatureType8(undefined);
                    this.addedCreatureType9(undefined);
                }
                else {
                    //TODO: Better error handling
                    alert("Please select Creature Type.");
                }
            }
            return summonedCreatures;
        };
        Summon.prototype.Summon1 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_2.Summon1.DireRat:
                    newCreature = new direrat_1.DireRat(name, rounds);
                    break;
                case enums_2.Summon1.Dog:
                    newCreature = new dog_1.Dog(name, rounds);
                    break;
                case enums_2.Summon1.Dolphin:
                    newCreature = new dolphin_1.Dolphin(name, rounds);
                    break;
                case enums_2.Summon1.Eagle:
                    newCreature = new eagle_1.Eagle(name, rounds);
                    break;
                case enums_2.Summon1.FireBeetle:
                    newCreature = new firebeetle_1.FireBeetle(name, rounds);
                    break;
                case enums_2.Summon1.GiantCentipede:
                    newCreature = new giantcentipede_1.GiantCentipede(name, rounds);
                    break;
                case enums_2.Summon1.Mite:
                    newCreature = new mite_1.Mite(name, rounds);
                    break;
                case enums_2.Summon1.PoisonousFrog:
                    newCreature = new poisonousfrog_1.PoisonousFrog(name, rounds);
                    break;
                case enums_2.Summon1.Pony:
                    newCreature = new pony_1.Pony(name, rounds);
                    break;
                case enums_2.Summon1.Stirge:
                    newCreature = new stirge_1.Stirge(name, rounds);
                    break;
                case enums_2.Summon1.Viper:
                    newCreature = new viper_1.Viper(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon2 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_2.Summon2.ElementalSmallAir:
                    newCreature = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.Summon2.ElementalSmallEarth:
                    newCreature = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.Summon2.ElementalSmallFire:
                    newCreature = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.Summon2.ElementalSmallWater:
                    newCreature = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.Summon2.GiantAntWorker:
                    newCreature = new giantantworker_1.GiantAntWorker(name, rounds);
                    break;
                case enums_2.Summon2.GiantFrog:
                    newCreature = new giantfrog_1.GiantFrog(name, rounds);
                    break;
                case enums_2.Summon2.GiantSpider:
                    newCreature = new giantspider_1.GiantSpider(name, rounds);
                    break;
                case enums_2.Summon2.GoblinDog:
                    newCreature = new goblindog_1.GoblinDog(name, rounds);
                    break;
                case enums_2.Summon2.Horse:
                    newCreature = new horse_1.Horse(name, rounds);
                    break;
                case enums_2.Summon2.Hyena:
                    newCreature = new hyena_1.Hyena(name, rounds);
                    break;
                case enums_2.Summon2.Octopus:
                    newCreature = new octopus_1.Octopus(name, rounds);
                    break;
                case enums_2.Summon2.Squid:
                    newCreature = new squid_1.Squid(name, rounds);
                    break;
                case enums_2.Summon2.Wolf:
                    newCreature = new wolf_1.Wolf(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon3 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_2.Summon3.Ape:
                    newCreature = new ape_1.Ape(name, rounds);
                    break;
                case enums_2.Summon3.Auroch:
                    newCreature = new auroch_1.Auroch(name, rounds);
                    break;
                case enums_2.Summon3.Boar:
                    newCreature = new boar_1.Boar(name, rounds);
                    break;
                case enums_2.Summon3.Cheetah:
                    newCreature = new cheetah_1.Cheetah(name, rounds);
                    break;
                case enums_2.Summon3.ConstrictorSnake:
                    newCreature = new constrictorsnake_1.ConstrictorSnake(name, rounds);
                    break;
                case enums_2.Summon3.Crocodile:
                    newCreature = new crocodile_1.Crocodile(name, rounds);
                    break;
                case enums_2.Summon3.DireBat:
                    newCreature = new direbat_1.DireBat(name, rounds);
                    break;
                case enums_2.Summon3.ElectricEel:
                    newCreature = new electriceel_1.ElectricEel(name, rounds);
                    break;
                case enums_2.Summon3.GiantAnt:
                    newCreature = new giantant_1.GiantAnt(name, rounds);
                    break;
                case enums_2.Summon3.GiantCrab:
                    newCreature = new giantcrab_1.GiantCrab(name, rounds);
                    break;
                case enums_2.Summon3.Leopard:
                    newCreature = new leopard_1.Leopard(name, rounds);
                    break;
                case enums_2.Summon3.MonitorLizard:
                    newCreature = new monitorlizard_1.MonitorLizard(name, rounds);
                    break;
                case enums_2.Summon3.Shark:
                    newCreature = new shark_1.Shark(name, rounds);
                    break;
                case enums_2.Summon3.Wolverine:
                    newCreature = new wolverine_1.Wolverine(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon4 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_3.Summon4.ElementalMediumAir:
                    newCreature = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.Summon4.ElementalMediumEarth:
                    newCreature = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.Summon4.ElementalMediumFire:
                    newCreature = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.Summon4.ElementalMediumWater:
                    newCreature = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.Summon4.Bison:
                    newCreature = new bison_1.Bison(name, rounds);
                    break;
                case enums_3.Summon4.DireApe:
                    newCreature = new direape_1.DireApe(name, rounds);
                    break;
                case enums_3.Summon4.DireBoar:
                    newCreature = new direboar_1.DireBoar(name, rounds);
                    break;
                case enums_3.Summon4.DireWolf:
                    newCreature = new direwolf_1.DireWolf(name, rounds);
                    break;
                case enums_3.Summon4.GiantAntDrone:
                    newCreature = new giantantdrone_1.GiantAntDrone(name, rounds);
                    break;
                case enums_3.Summon4.GiantScorpion:
                    newCreature = new giantscorpion_1.GiantScorpion(name, rounds);
                    break;
                case enums_3.Summon4.GiantStagBeetle:
                    newCreature = new giantstagbeetle_1.GiantStagBeetle(name, rounds);
                    break;
                case enums_3.Summon4.GiantWasp:
                    newCreature = new giantwasp_1.GiantWasp(name, rounds);
                    break;
                case enums_3.Summon4.Griffon:
                    newCreature = new griffon_1.Griffon(name, rounds);
                    break;
                case enums_3.Summon4.GrizzlyBear:
                    newCreature = new grizzlybear_1.GrizzlyBear(name, rounds);
                    break;
                case enums_3.Summon4.Lion:
                    newCreature = new lion_1.Lion(name, rounds);
                    break;
                case enums_3.Summon4.Mephit:
                    newCreature = new mephit_1.Mephit(name, rounds);
                    break;
                case enums_3.Summon4.Owlbear:
                    newCreature = new owlbear_1.Owlbear(name, rounds);
                    break;
                case enums_3.Summon4.Rhinoceros:
                    newCreature = new rhinoceros_1.Rhinoceros(name, rounds);
                    break;
                case enums_3.Summon4.Satyr:
                    newCreature = new satyr_1.Satyr(name, rounds);
                    break;
                case enums_3.Summon4.Tiger:
                    newCreature = new tiger_1.Tiger(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon5 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_3.Summon5.ElementalLargeAir:
                    newCreature = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.Summon5.ElementalLargeEarth:
                    newCreature = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.Summon5.ElementalLargeFire:
                    newCreature = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.Summon5.ElementalLargeWater:
                    newCreature = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.Summon5.Cyclops:
                    newCreature = new cyclops_1.Cyclops(name, rounds);
                    break;
                case enums_3.Summon5.DireLion:
                    newCreature = new direlion_1.DireLion(name, rounds);
                    break;
                case enums_3.Summon5.Ettin:
                    newCreature = new ettin_1.Ettin(name, rounds);
                    break;
                case enums_3.Summon5.GiantMorayEel:
                    newCreature = new giantmorayeel_1.GiantMorayEel(name, rounds);
                    break;
                case enums_3.Summon5.Girallon:
                    newCreature = new girallon_1.Girallon(name, rounds);
                    break;
                case enums_3.Summon5.Manticore:
                    newCreature = new manticore_1.Manticore(name, rounds);
                    break;
                case enums_3.Summon5.Orca:
                    newCreature = new orca_1.Orca(name, rounds);
                    break;
                case enums_3.Summon5.WoollyRhinoceros:
                    newCreature = new woollyrhinoceros_1.WoollyRhinoceros(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon6 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_3.Summon6.ElementalHugeAir:
                    newCreature = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.Summon6.ElementalHugeEarth:
                    newCreature = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.Summon6.ElementalHugeFire:
                    newCreature = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.Summon6.ElementalHugeWater:
                    newCreature = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.Summon6.Bulette:
                    newCreature = new bulette_1.Bulette(name, rounds);
                    break;
                case enums_3.Summon6.DireBear:
                    newCreature = new direbear_1.DireBear(name, rounds);
                    break;
                case enums_3.Summon6.DireTiger:
                    newCreature = new diretiger_1.DireTiger(name, rounds);
                    break;
                case enums_3.Summon6.Elephant:
                    newCreature = new elephant_1.Elephant(name, rounds);
                    break;
                case enums_3.Summon6.GiantOctopus:
                    newCreature = new giantoctopus_1.GiantOctopus(name, rounds);
                    break;
                case enums_3.Summon6.HillGiant:
                    newCreature = new hillgiant_1.HillGiant(name, rounds);
                    break;
                case enums_3.Summon6.StoneGiant:
                    newCreature = new stonegiant_1.StoneGiant(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon7 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_4.Summon7.ElementalGreaterAir:
                    newCreature = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.Summon7.ElementalGreaterEarth:
                    newCreature = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.Summon7.ElementalGreaterFire:
                    newCreature = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.Summon7.ElementalGreaterWater:
                    newCreature = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.Summon7.DireCrocodile:
                    newCreature = new direcrocodile_1.DireCrocodile(name, rounds);
                    break;
                case enums_4.Summon7.DireShark:
                    newCreature = new direshark_1.DireShark(name, rounds);
                    break;
                case enums_4.Summon7.FireGiant:
                    newCreature = new firegiant_1.FireGiant(name, rounds);
                    break;
                case enums_4.Summon7.FrostGiant:
                    newCreature = new frostgiant_1.FrostGiant(name, rounds);
                    break;
                case enums_4.Summon7.GiantSquid:
                    newCreature = new giantsquid_1.GiantSquid(name, rounds);
                    break;
                case enums_4.Summon7.Mastodon:
                    newCreature = new mastodon_1.Mastodon(name, rounds);
                    break;
                case enums_4.Summon7.Roc:
                    newCreature = new roc_1.Roc(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon8 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_4.Summon8.ElementalElderAir:
                    newCreature = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.Summon8.ElementalElderEarth:
                    newCreature = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.Summon8.ElementalElderFire:
                    newCreature = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.Summon8.ElementalElderWater:
                    newCreature = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.Summon8.CloudGiant:
                    newCreature = new cloudgiant_1.CloudGiant(name, rounds);
                    break;
                case enums_4.Summon8.PurpleWorm:
                    newCreature = new purpleworm_1.PurpleWorm(name, rounds);
                    break;
            }
            return newCreature;
        };
        Summon.prototype.Summon9 = function (name, rounds, creatureType) {
            var newCreature;
            switch (creatureType) {
                case enums_4.Summon9.Pixie:
                    newCreature = new pixie_1.Pixie(name, rounds);
                    break;
                case enums_4.Summon9.StormGiant:
                    newCreature = new stormgiant_1.StormGiant(name, rounds);
                    break;
            }
            return newCreature;
        };
        return Summon;
    }());
    exports.Summon = Summon;
});
//# sourceMappingURL=summon.js.map