define(["require", "exports", "knockout", "./model/enums", "./model/enums", "./model/enums", "./model/enums", "./model/elementals/airelemental", "./model/elementals/earthelemental", "./model/elementals/fireelemental", "./model/elementals/waterelemental", "./model/natureally1/direrat", "./model/natureally1/dog", "./model/natureally1/dolphin", "./model/natureally1/eagle", "./model/natureally1/firebeetle", "./model/natureally1/giantcentipede", "./model/natureally1/mite", "./model/natureally1/poisonousfrog", "./model/natureally1/pony", "./model/natureally1/stirge", "./model/natureally1/viper", "./model/natureally2/giantantworker", "./model/natureally2/giantfrog", "./model/natureally2/giantspider", "./model/natureally2/goblindog", "./model/natureally2/horse", "./model/natureally2/hyena", "./model/natureally2/octopus", "./model/natureally2/squid", "./model/natureally2/wolf", "./model/natureally3/ape", "./model/natureally3/auroch", "./model/natureally3/boar", "./model/natureally3/cheetah", "./model/natureally3/constrictorsnake", "./model/natureally3/crocodile", "./model/natureally3/direbat", "./model/natureally3/electriceel", "./model/natureally3/giantant", "./model/natureally3/giantcrab", "./model/natureally3/leopard", "./model/natureally3/monitorlizard", "./model/natureally3/shark", "./model/natureally3/wolverine"], function (require, exports, ko, enums_1, enums_2, enums_3, enums_4, airelemental_1, earthelemental_1, fireelemental_1, waterelemental_1, direrat_1, dog_1, dolphin_1, eagle_1, firebeetle_1, giantcentipede_1, mite_1, poisonousfrog_1, pony_1, stirge_1, viper_1, giantantworker_1, giantfrog_1, giantspider_1, goblindog_1, horse_1, hyena_1, octopus_1, squid_1, wolf_1, ape_1, auroch_1, boar_1, cheetah_1, constrictorsnake_1, crocodile_1, direbat_1, electriceel_1, giantant_1, giantcrab_1, leopard_1, monitorlizard_1, shark_1, wolverine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SummonNaturesAlly = /** @class */ (function () {
        function SummonNaturesAlly() {
            this.addedAnimalType1 = ko.observable();
            this.addedAnimalType2 = ko.observable();
            this.addedAnimalType3 = ko.observable();
            this.addedAnimalType4 = ko.observable();
            this.addedAnimalType5 = ko.observable();
            this.addedAnimalType6 = ko.observable();
            this.addedAnimalType7 = ko.observable();
            this.addedAnimalType8 = ko.observable();
            this.summonNaturesAlly1Choices = ko.observableArray();
            for (var animal in enums_2.SummonNaturesAlly1) {
                this.summonNaturesAlly1Choices.push(animal);
            }
            this.summonNaturesAlly2Choices = ko.observableArray();
            for (var animal in enums_2.SummonNaturesAlly2) {
                this.summonNaturesAlly2Choices.push(animal);
            }
            this.summonNaturesAlly3Choices = ko.observableArray();
            for (var animal in enums_2.SummonNaturesAlly3) {
                this.summonNaturesAlly3Choices.push(animal);
            }
            this.summonNaturesAlly4Choices = ko.observableArray();
            for (var animal in enums_3.SummonNaturesAlly4) {
                this.summonNaturesAlly4Choices.push(animal);
            }
            this.summonNaturesAlly5Choices = ko.observableArray();
            for (var animal in enums_3.SummonNaturesAlly5) {
                this.summonNaturesAlly5Choices.push(animal);
            }
            this.summonNaturesAlly6Choices = ko.observableArray();
            for (var animal in enums_3.SummonNaturesAlly6) {
                this.summonNaturesAlly6Choices.push(animal);
            }
            this.summonNaturesAlly7Choices = ko.observableArray();
            for (var animal in enums_4.SummonNaturesAlly7) {
                this.summonNaturesAlly7Choices.push(animal);
            }
            this.summonNaturesAlly8Choices = ko.observableArray();
            for (var animal in enums_4.SummonNaturesAlly8) {
                this.summonNaturesAlly8Choices.push(animal);
            }
        }
        //TODO: Move RollDice somewhere where both viewmodel and other classes can use it
        SummonNaturesAlly.prototype.rollDice = function (numberOfDice, typeOfDice) {
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
        SummonNaturesAlly.prototype.summonNaturesAlly = function (druidLevel, spellLevel, animalLevel, animalName) {
            var summonedAnimals = [];
            var numberOfAnimals = 0;
            console.log("Cast Summon Nature's Ally " + spellLevel + " for animal level " + animalLevel);
            //TODO: Add user-visible validation and error messages
            if (spellLevel == 0 || animalLevel == 0) {
                alert("Please select both a spell level and an animal level.");
            }
            else if (spellLevel < 1 || spellLevel > 9) {
                console.log("Spell level of " + spellLevel + " is invalid.");
            }
            else if (animalLevel < 1 || animalLevel > 9 || animalLevel > spellLevel) {
                console.log("Animal level of " + animalLevel + " is invalid.");
            }
            else {
                if (spellLevel == animalLevel) {
                    numberOfAnimals = 1;
                }
                else if (spellLevel > animalLevel) {
                    if (spellLevel == animalLevel + 1) {
                        //Summon 1d3 animals of this level
                        numberOfAnimals = this.rollDice(1, 3);
                    }
                    else {
                        //Summon 1d4+1 animals of this level
                        numberOfAnimals = this.rollDice(1, 4) + 1;
                    }
                }
                console.log("Summon " + numberOfAnimals + " animals of this level");
                for (var i = 1; i <= numberOfAnimals; i++) {
                    var newAnimal = void 0;
                    switch (animalLevel) {
                        case 1:
                            newAnimal = this.summonNaturesAlly1(animalName + " " + i, druidLevel, this.addedAnimalType1());
                            break;
                        case 2:
                            newAnimal = this.summonNaturesAlly2(animalName + " " + i, druidLevel, this.addedAnimalType2());
                            break;
                        case 3:
                            newAnimal = this.summonNaturesAlly3(animalName + " " + i, druidLevel, this.addedAnimalType3());
                            break;
                        case 4:
                            newAnimal = this.summonNaturesAlly4(animalName + " " + i, druidLevel, this.addedAnimalType4());
                            break;
                        case 5:
                            newAnimal = this.summonNaturesAlly5(animalName + " " + i, druidLevel, this.addedAnimalType5());
                            break;
                        case 6:
                            newAnimal = this.summonNaturesAlly6(animalName + " " + i, druidLevel, this.addedAnimalType6());
                            break;
                        case 7:
                            newAnimal = this.summonNaturesAlly7(animalName + " " + i, druidLevel, this.addedAnimalType7());
                            break;
                        case 8:
                            newAnimal = this.summonNaturesAlly8(animalName + " " + i, druidLevel, this.addedAnimalType8());
                            break;
                        case 9:
                            //newAnimal = this.summonNaturesAlly9(animalName + " " + i, druidLevel, this.addedAnimalType9());
                            break;
                    }
                    if (newAnimal != undefined) {
                        summonedAnimals.push(newAnimal);
                    }
                }
                if (summonedAnimals.length > 0) {
                    this.addedAnimalType1(undefined);
                    this.addedAnimalType2(undefined);
                    this.addedAnimalType3(undefined);
                    this.addedAnimalType4(undefined);
                    this.addedAnimalType5(undefined);
                    this.addedAnimalType6(undefined);
                    this.addedAnimalType7(undefined);
                    this.addedAnimalType8(undefined);
                }
                else {
                    //TODO: Better error handling
                    alert("Please select Animal Type.");
                }
            }
            return summonedAnimals;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly1 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_2.SummonNaturesAlly1.DireRat:
                    newAnimal = new direrat_1.DireRat(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Dog:
                    newAnimal = new dog_1.Dog(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Dolphin:
                    newAnimal = new dolphin_1.Dolphin(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Eagle:
                    newAnimal = new eagle_1.Eagle(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.FireBeetle:
                    newAnimal = new firebeetle_1.FireBeetle(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.GiantCentipede:
                    newAnimal = new giantcentipede_1.GiantCentipede(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Mite:
                    newAnimal = new mite_1.Mite(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.PoisonousFrog:
                    newAnimal = new poisonousfrog_1.PoisonousFrog(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Pony:
                    newAnimal = new pony_1.Pony(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Stirge:
                    newAnimal = new stirge_1.Stirge(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly1.Viper:
                    newAnimal = new viper_1.Viper(name, rounds);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly2 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_2.SummonNaturesAlly2.ElementalSmallAir:
                    newAnimal = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.SummonNaturesAlly2.ElementalSmallEarth:
                    newAnimal = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.SummonNaturesAlly2.ElementalSmallFire:
                    newAnimal = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.SummonNaturesAlly2.ElementalSmallWater:
                    newAnimal = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Small);
                    break;
                case enums_2.SummonNaturesAlly2.GiantAntWorker:
                    newAnimal = new giantantworker_1.GiantAntWorker(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.GiantFrog:
                    newAnimal = new giantfrog_1.GiantFrog(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.GiantSpider:
                    newAnimal = new giantspider_1.GiantSpider(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.GoblinDog:
                    newAnimal = new goblindog_1.GoblinDog(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.Horse:
                    newAnimal = new horse_1.Horse(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.Hyena:
                    newAnimal = new hyena_1.Hyena(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.Octopus:
                    newAnimal = new octopus_1.Octopus(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.Squid:
                    newAnimal = new squid_1.Squid(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly2.Wolf:
                    newAnimal = new wolf_1.Wolf(name, rounds);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly3 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_2.SummonNaturesAlly3.Ape:
                    newAnimal = new ape_1.Ape(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Auroch:
                    newAnimal = new auroch_1.Auroch(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Boar:
                    newAnimal = new boar_1.Boar(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Cheetah:
                    newAnimal = new cheetah_1.Cheetah(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.ConstrictorSnake:
                    newAnimal = new constrictorsnake_1.ConstrictorSnake(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Crocodile:
                    newAnimal = new crocodile_1.Crocodile(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.DireBat:
                    newAnimal = new direbat_1.DireBat(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.ElectricEel:
                    newAnimal = new electriceel_1.ElectricEel(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.GiantAnt:
                    newAnimal = new giantant_1.GiantAnt(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.GiantCrab:
                    newAnimal = new giantcrab_1.GiantCrab(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Leopard:
                    newAnimal = new leopard_1.Leopard(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.MonitorLizard:
                    newAnimal = new monitorlizard_1.MonitorLizard(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Shark:
                    newAnimal = new shark_1.Shark(name, rounds);
                    break;
                case enums_2.SummonNaturesAlly3.Wolverine:
                    newAnimal = new wolverine_1.Wolverine(name, rounds);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly4 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_3.SummonNaturesAlly4.ElementalMediumAir:
                    newAnimal = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.SummonNaturesAlly4.ElementalMediumEarth:
                    newAnimal = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.SummonNaturesAlly4.ElementalMediumFire:
                    newAnimal = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
                case enums_3.SummonNaturesAlly4.ElementalMediumWater:
                    newAnimal = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Medium);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly5 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_3.SummonNaturesAlly5.ElementalLargeAir:
                    newAnimal = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.SummonNaturesAlly5.ElementalLargeEarth:
                    newAnimal = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.SummonNaturesAlly5.ElementalLargeFire:
                    newAnimal = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
                case enums_3.SummonNaturesAlly5.ElementalLargeWater:
                    newAnimal = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Large);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly6 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_3.SummonNaturesAlly6.ElementalHugeAir:
                    newAnimal = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.SummonNaturesAlly6.ElementalHugeEarth:
                    newAnimal = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.SummonNaturesAlly6.ElementalHugeFire:
                    newAnimal = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
                case enums_3.SummonNaturesAlly6.ElementalHugeWater:
                    newAnimal = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Huge);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly7 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_4.SummonNaturesAlly7.ElementalGreaterAir:
                    newAnimal = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.SummonNaturesAlly7.ElementalGreaterEarth:
                    newAnimal = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.SummonNaturesAlly7.ElementalGreaterFire:
                    newAnimal = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
                case enums_4.SummonNaturesAlly7.ElementalGreaterWater:
                    newAnimal = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Greater);
                    break;
            }
            return newAnimal;
        };
        SummonNaturesAlly.prototype.summonNaturesAlly8 = function (name, rounds, animalType) {
            var newAnimal;
            switch (animalType) {
                case enums_4.SummonNaturesAlly8.ElementalElderAir:
                    newAnimal = new airelemental_1.AirElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.SummonNaturesAlly8.ElementalElderEarth:
                    newAnimal = new earthelemental_1.EarthElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.SummonNaturesAlly8.ElementalElderFire:
                    newAnimal = new fireelemental_1.FireElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
                case enums_4.SummonNaturesAlly8.ElementalElderWater:
                    newAnimal = new waterelemental_1.WaterElemental(name, rounds, enums_1.ElementalType.Elder);
                    break;
            }
            return newAnimal;
        };
        return SummonNaturesAlly;
    }());
    exports.SummonNaturesAlly = SummonNaturesAlly;
});
//# sourceMappingURL=summonnaturesally.js.map