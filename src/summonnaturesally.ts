import * as ko from "knockout";

import { Size, CreatureType, ElementalType, Element } from "./model/enums";
import { SummonNaturesAlly1, SummonNaturesAlly2, SummonNaturesAlly3 } from "./model/enums";
import { SummonNaturesAlly4, SummonNaturesAlly5, SummonNaturesAlly6 } from "./model/enums";
import { SummonNaturesAlly7, SummonNaturesAlly8 } from "./model/enums";
import { Animal } from "./model/animal";

//TODO Isn't there an easier way to import a bunch of models?
import { Elemental } from "./model/elementals/elemental";
import { AirElemental } from "./model/elementals/airelemental";
import { EarthElemental } from "./model/elementals/earthelemental";
import { FireElemental } from "./model/elementals/fireelemental";
import { WaterElemental } from "./model/elementals/waterelemental";

import { DireRat } from "./model/natureally1/direrat";
import { Dog } from "./model/natureally1/dog";
import { Dolphin } from "./model/natureally1/dolphin";
import { Eagle } from "./model/natureally1/eagle";
import { FireBeetle } from "./model/natureally1/firebeetle";
import { GiantCentipede } from "./model/natureally1/giantcentipede";
import { Mite } from "./model/natureally1/mite";
import { PoisonousFrog } from "./model/natureally1/poisonousfrog";
import { Pony } from "./model/natureally1/pony";
import { Stirge } from "./model/natureally1/stirge";
import { Viper } from "./model/natureally1/viper";

import { GiantAntWorker } from "./model/natureally2/giantantworker";
import { GiantFrog } from "./model/natureally2/giantfrog";
import { GiantSpider } from "./model/natureally2/giantspider";
import { GoblinDog } from "./model/natureally2/goblindog";
import { Horse } from "./model/natureally2/horse";
import { Hyena } from "./model/natureally2/hyena";
import { Octopus } from "./model/natureally2/octopus";
import { Squid } from "./model/natureally2/squid";
import { Wolf } from "./model/natureally2/wolf";

import { Ape } from "./model/natureally3/ape";
import { Auroch } from "./model/natureally3/auroch";
import { Boar } from "./model/natureally3/boar";
import { Cheetah } from "./model/natureally3/cheetah";
import { ConstrictorSnake } from "./model/natureally3/constrictorsnake";
import { Crocodile } from "./model/natureally3/crocodile";
import { DireBat } from "./model/natureally3/direbat";
import { ElectricEel } from "./model/natureally3/electriceel";
import { GiantAnt } from "./model/natureally3/giantant";
import { GiantCrab } from "./model/natureally3/giantcrab";
import { Leopard } from "./model/natureally3/leopard";
import { MonitorLizard } from "./model/natureally3/monitorlizard";
import { Shark } from "./model/natureally3/shark";
import { Wolverine } from "./model/natureally3/wolverine";

import { Bison } from "./model/natureally4/bison";
import { DireApe } from "./model/natureally4/direape";
import { DireBoar } from "./model/natureally4/direboar";
import { DireWolf } from "./model/natureally4/direwolf";
import { GiantAntDrone } from "./model/natureally4/giantantdrone";
import { GiantScorpion } from "./model/natureally4/giantscorpion";
import { GiantStagBeetle } from "./model/natureally4/giantstagbeetle";
import { GiantWasp } from "./model/natureally4/giantwasp";
import { Griffon } from "./model/natureally4/griffon";
import { GrizzlyBear } from "./model/natureally4/grizzlybear";
import { Lion } from "./model/natureally4/lion";
import { Mephit } from "./model/natureally4/mephit";
import { Owlbear } from "./model/natureally4/owlbear";
import { Rhinoceros } from "./model/natureally4/rhinoceros";
import { Satyr } from "./model/natureally4/satyr";
import { Tiger } from "./model/natureally4/tiger";

import { Cyclops } from "./model/natureally5/cyclops";
import { DireLion } from "./model/natureally5/direlion";
import { Ettin } from "./model/natureally5/ettin";
import { GiantMorayEel } from "./model/natureally5/giantmorayeel";
import { Girallon } from "./model/natureally5/girallon";
import { Manticore } from "./model/natureally5/manticore";
import { Orca } from "./model/natureally5/orca";
import { WoollyRhinoceros } from "./model/natureally5/woollyrhinoceros";

import { Bulette } from "./model/natureally6/bulette";
import { DireBear } from "./model/natureally6/direbear";
import { DireTiger } from "./model/natureally6/diretiger";
import { Elephant } from "./model/natureally6/elephant";
import { GiantOctopus } from "./model/natureally6/giantoctopus";
import { HillGiant } from "./model/natureally6/hillgiant";
import { StoneGiant } from "./model/natureally6/stonegiant";

export class SummonNaturesAlly {
    summonNaturesAlly1Choices: KnockoutObservableArray<string>;
    summonNaturesAlly2Choices: KnockoutObservableArray<string>;
    summonNaturesAlly3Choices: KnockoutObservableArray<string>;
    summonNaturesAlly4Choices: KnockoutObservableArray<string>;
    summonNaturesAlly5Choices: KnockoutObservableArray<string>;
    summonNaturesAlly6Choices: KnockoutObservableArray<string>;
    summonNaturesAlly7Choices: KnockoutObservableArray<string>;
    summonNaturesAlly8Choices: KnockoutObservableArray<string>;

    addedAnimalType1: KnockoutObservable<SummonNaturesAlly1>;
    addedAnimalType2: KnockoutObservable<SummonNaturesAlly2>;
    addedAnimalType3: KnockoutObservable<SummonNaturesAlly3>;
    addedAnimalType4: KnockoutObservable<SummonNaturesAlly4>;
    addedAnimalType5: KnockoutObservable<SummonNaturesAlly5>;
    addedAnimalType6: KnockoutObservable<SummonNaturesAlly6>;
    addedAnimalType7: KnockoutObservable<SummonNaturesAlly7>;
    addedAnimalType8: KnockoutObservable<SummonNaturesAlly8>;

    constructor() {
        this.addedAnimalType1 = ko.observable();
        this.addedAnimalType2 = ko.observable();
        this.addedAnimalType3 = ko.observable();
        this.addedAnimalType4 = ko.observable();
        this.addedAnimalType5 = ko.observable();
        this.addedAnimalType6 = ko.observable();
        this.addedAnimalType7 = ko.observable();
        this.addedAnimalType8 = ko.observable();

        this.summonNaturesAlly1Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly1) {
            this.summonNaturesAlly1Choices.push(animal);
        }

        this.summonNaturesAlly2Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly2) {
            this.summonNaturesAlly2Choices.push(animal);
        }

        this.summonNaturesAlly3Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly3) {
            this.summonNaturesAlly3Choices.push(animal);
        }

        this.summonNaturesAlly4Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly4) {
            this.summonNaturesAlly4Choices.push(animal);
        }

        this.summonNaturesAlly5Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly5) {
            this.summonNaturesAlly5Choices.push(animal);
        }

        this.summonNaturesAlly6Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly6) {
            this.summonNaturesAlly6Choices.push(animal);
        }

        this.summonNaturesAlly7Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly7) {
            this.summonNaturesAlly7Choices.push(animal);
        }

        this.summonNaturesAlly8Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly8) {
            this.summonNaturesAlly8Choices.push(animal);
        }
    }

    //TODO: Move RollDice somewhere where both viewmodel and other classes can use it
    rollDice(numberOfDice: number, typeOfDice: number) {
        let result: number = 0;
        console.log("Rolling " + numberOfDice + "d" + typeOfDice);
        for (let i: number = 0; i < numberOfDice; i++) {
            let roll: number = Math.floor(Math.random() * typeOfDice) + 1;
            result += roll;
            console.log("Rolled a " + roll);
        }
        console.log("Total of dice rolls is a " + result);
        return result;
    }

    summonNaturesAlly(druidLevel: number, spellLevel: number, animalLevel: number, animalName: string) {
        let summonedAnimals: Animal[] = [];
        let numberOfAnimals: number = 0;
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
            for (let i = 1; i <= numberOfAnimals; i++) {
                let newAnimal: Animal;
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
    }

    summonNaturesAlly1(name: string, rounds: number, animalType: SummonNaturesAlly1) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly1.DireRat:
                newAnimal = new DireRat(name, rounds);
                break;
            case SummonNaturesAlly1.Dog:
                newAnimal = new Dog(name, rounds);
                break;
            case SummonNaturesAlly1.Dolphin:
                newAnimal = new Dolphin(name, rounds);
                break;
            case SummonNaturesAlly1.Eagle:
                newAnimal = new Eagle(name, rounds);
                break;
            case SummonNaturesAlly1.FireBeetle:
                newAnimal = new FireBeetle(name, rounds);
                break;
            case SummonNaturesAlly1.GiantCentipede:
                newAnimal = new GiantCentipede(name, rounds);
                break;
            case SummonNaturesAlly1.Mite:
                newAnimal = new Mite(name, rounds);
                break;
            case SummonNaturesAlly1.PoisonousFrog:
                newAnimal = new PoisonousFrog(name, rounds);
                break;
            case SummonNaturesAlly1.Pony:
                newAnimal = new Pony(name, rounds);
                break;
            case SummonNaturesAlly1.Stirge:
                newAnimal = new Stirge(name, rounds);
                break;
            case SummonNaturesAlly1.Viper:
                newAnimal = new Viper(name, rounds);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly2(name: string, rounds: number, animalType: SummonNaturesAlly2) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly2.ElementalSmallAir:
                newAnimal = new AirElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.ElementalSmallEarth:
                newAnimal = new EarthElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.ElementalSmallFire:
                newAnimal = new FireElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.ElementalSmallWater:
                newAnimal = new WaterElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.GiantAntWorker:
                newAnimal = new GiantAntWorker(name, rounds);
                break;
            case SummonNaturesAlly2.GiantFrog:
                newAnimal = new GiantFrog(name, rounds);
                break;
            case SummonNaturesAlly2.GiantSpider:
                newAnimal = new GiantSpider(name, rounds);
                break;
            case SummonNaturesAlly2.GoblinDog:
                newAnimal = new GoblinDog(name, rounds);
                break;
            case SummonNaturesAlly2.Horse:
                newAnimal = new Horse(name, rounds);
                break;
            case SummonNaturesAlly2.Hyena:
                newAnimal = new Hyena(name, rounds);
                break;
            case SummonNaturesAlly2.Octopus:
                newAnimal = new Octopus(name, rounds);
                break;
            case SummonNaturesAlly2.Squid:
                newAnimal = new Squid(name, rounds);
                break;
            case SummonNaturesAlly2.Wolf:
                newAnimal = new Wolf(name, rounds);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly3(name: string, rounds: number, animalType: SummonNaturesAlly3) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly3.Ape:
                newAnimal = new Ape(name, rounds);
                break;
            case SummonNaturesAlly3.Auroch:
                newAnimal = new Auroch(name, rounds);
                break;
            case SummonNaturesAlly3.Boar:
                newAnimal = new Boar(name, rounds);
                break;
            case SummonNaturesAlly3.Cheetah:
                newAnimal = new Cheetah(name, rounds);
                break;
            case SummonNaturesAlly3.ConstrictorSnake:
                newAnimal = new ConstrictorSnake(name, rounds);
                break;
            case SummonNaturesAlly3.Crocodile:
                newAnimal = new Crocodile(name, rounds);
                break;
            case SummonNaturesAlly3.DireBat:
                newAnimal = new DireBat(name, rounds);
                break;
            case SummonNaturesAlly3.ElectricEel:
                newAnimal = new ElectricEel(name, rounds);
                break;
            case SummonNaturesAlly3.GiantAnt:
                newAnimal = new GiantAnt(name, rounds);
                break;
            case SummonNaturesAlly3.GiantCrab:
                newAnimal = new GiantCrab(name, rounds);
                break;
            case SummonNaturesAlly3.Leopard:
                newAnimal = new Leopard(name, rounds);
                break;
            case SummonNaturesAlly3.MonitorLizard:
                newAnimal = new MonitorLizard(name, rounds);
                break;
            case SummonNaturesAlly3.Shark:
                newAnimal = new Shark(name, rounds);
                break;
            case SummonNaturesAlly3.Wolverine:
                newAnimal = new Wolverine(name, rounds);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly4(name: string, rounds: number, animalType: SummonNaturesAlly4) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly4.ElementalMediumAir:
                newAnimal = new AirElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.ElementalMediumEarth:
                newAnimal = new EarthElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.ElementalMediumFire:
                newAnimal = new FireElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.ElementalMediumWater:
                newAnimal = new WaterElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.Bison:
                newAnimal = new Bison(name, rounds);
                break;
            case SummonNaturesAlly4.DireApe:
                newAnimal = new DireApe(name, rounds);
                break;
            case SummonNaturesAlly4.DireBoar:
                newAnimal = new DireBoar(name, rounds);
                break;
            case SummonNaturesAlly4.DireWolf:
                newAnimal = new DireWolf(name, rounds);
                break;
            case SummonNaturesAlly4.GiantAntDrone:
                newAnimal = new GiantAntDrone(name, rounds);
                break;
            case SummonNaturesAlly4.GiantScorpion:
                newAnimal = new GiantScorpion(name, rounds);
                break;
            case SummonNaturesAlly4.GiantStagBeetle:
                newAnimal = new GiantStagBeetle(name, rounds);
                break;
            case SummonNaturesAlly4.GiantWasp:
                newAnimal = new GiantWasp(name, rounds);
                break;
            case SummonNaturesAlly4.Griffon:
                newAnimal = new Griffon(name, rounds);
                break;
            case SummonNaturesAlly4.GrizzlyBear:
                newAnimal = new GrizzlyBear(name, rounds);
                break;
            case SummonNaturesAlly4.Lion:
                newAnimal = new Lion(name, rounds);
                break;
            case SummonNaturesAlly4.Mephit:
                newAnimal = new Mephit(name, rounds);
                break;
            case SummonNaturesAlly4.Owlbear:
                newAnimal = new Owlbear(name, rounds);
                break;
            case SummonNaturesAlly4.Rhinoceros:
                newAnimal = new Rhinoceros(name, rounds);
                break;
            case SummonNaturesAlly4.Satyr:
                newAnimal = new Satyr(name, rounds);
                break;
            case SummonNaturesAlly4.Tiger:
                newAnimal = new Tiger(name, rounds);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly5(name: string, rounds: number, animalType: SummonNaturesAlly5) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly5.ElementalLargeAir:
                newAnimal = new AirElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.ElementalLargeEarth:
                newAnimal = new EarthElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.ElementalLargeFire:
                newAnimal = new FireElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.ElementalLargeWater:
                newAnimal = new WaterElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.Cyclops:
                newAnimal = new Cyclops(name, rounds);
                break;
            case SummonNaturesAlly5.DireLion:
                newAnimal = new DireLion(name, rounds);
                break;
            case SummonNaturesAlly5.Ettin:
                newAnimal = new Ettin(name, rounds);
                break;
            case SummonNaturesAlly5.GiantMorayEel:
                newAnimal = new GiantMorayEel(name, rounds);
                break;
            case SummonNaturesAlly5.Girallon:
                newAnimal = new Girallon(name, rounds);
                break;
            case SummonNaturesAlly5.Manticore:
                newAnimal = new Manticore(name, rounds);
                break;
            case SummonNaturesAlly5.Orca:
                newAnimal = new Orca(name, rounds);
                break;
            case SummonNaturesAlly5.WoollyRhinoceros:
                newAnimal = new WoollyRhinoceros(name, rounds);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly6(name: string, rounds: number, animalType: SummonNaturesAlly6) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly6.ElementalHugeAir:
                newAnimal = new AirElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.ElementalHugeEarth:
                newAnimal = new EarthElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.ElementalHugeFire:
                newAnimal = new FireElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.ElementalHugeWater:
                newAnimal = new WaterElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.Bulette:
                newAnimal = new Bulette(name, rounds);
                break;
            case SummonNaturesAlly6.DireBear:
                newAnimal = new DireBear(name, rounds);
                break;
            case SummonNaturesAlly6.DireTiger:
                newAnimal = new DireTiger(name, rounds);
                break;
            case SummonNaturesAlly6.Elephant:
                newAnimal = new Elephant(name, rounds);
                break;
            case SummonNaturesAlly6.GiantOctopus:
                newAnimal = new GiantOctopus(name, rounds);
                break;
            case SummonNaturesAlly6.HillGiant:
                newAnimal = new HillGiant(name, rounds);
                break;
            case SummonNaturesAlly6.StoneGiant:
                newAnimal = new StoneGiant(name, rounds);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly7(name: string, rounds: number, animalType: SummonNaturesAlly7) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly7.ElementalGreaterAir:
                newAnimal = new AirElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.ElementalGreaterEarth:
                newAnimal = new EarthElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.ElementalGreaterFire:
                newAnimal = new FireElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.ElementalGreaterWater:
                newAnimal = new WaterElemental(name, rounds, ElementalType.Greater);
                break;
        }
        return newAnimal;
    }

    summonNaturesAlly8(name: string, rounds: number, animalType: SummonNaturesAlly8) {
        let newAnimal: Animal;
        switch (animalType) {
            case SummonNaturesAlly8.ElementalElderAir:
                newAnimal = new AirElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.ElementalElderEarth:
                newAnimal = new EarthElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.ElementalElderFire:
                newAnimal = new FireElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.ElementalElderWater:
                newAnimal = new WaterElemental(name, rounds, ElementalType.Elder);
                break;
        }
        return newAnimal;
    }

}