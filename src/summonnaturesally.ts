import * as ko from "knockout";

import { Size, CreatureType, SummonNaturesAlly1, SummonNaturesAlly2 } from "./model/enums";
import { Animal } from "./model/animal";
import { Elemental } from "./model/elemental";

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

//import { ElementalSmall } from "./model/natureally2/elementalsmall";
import { GiantAntWorker } from "./model/natureally2/giantant";
import { GiantFrog } from "./model/natureally2/giantfrog";
import { GiantSpider } from "./model/natureally2/giantspider";
import { GoblinDog } from "./model/natureally2/goblindog";
import { Horse } from "./model/natureally2/horse";
import { Hyena } from "./model/natureally2/hyena";
import { Octopus } from "./model/natureally2/octopus";
import { Squid } from "./model/natureally2/squid";
import { Wolf } from "./model/natureally2/wolf";


export class SummonNaturesAlly {
    summonNaturesAlly1Choices: KnockoutObservableArray<string>;
    summonNaturesAlly2Choices: KnockoutObservableArray<string>;
    addedAnimalType1: KnockoutObservable<SummonNaturesAlly1>;
    addedAnimalType2: KnockoutObservable<SummonNaturesAlly2>;

    constructor() {
        this.addedAnimalType1 = ko.observable();
        this.addedAnimalType2 = ko.observable();

        this.summonNaturesAlly1Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly1) {
            this.summonNaturesAlly1Choices.push(animal);
        }

        this.summonNaturesAlly2Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly2) {
            this.summonNaturesAlly2Choices.push(animal);
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
                        //newAnimal = this.summonNaturesAlly3(animalName + " " + i, druidLevel, this.addedAnimalType3());
                        break;
                    case 4:
                        //newAnimal = this.summonNaturesAlly4(animalName + " " + i, druidLevel, this.addedAnimalType4());
                        break;
                    case 5:
                        //newAnimal = this.summonNaturesAlly5(animalName + " " + i, druidLevel, this.addedAnimalType5());
                        break;
                    case 6:
                        //newAnimal = this.summonNaturesAlly6(animalName + " " + i, druidLevel, this.addedAnimalType6());
                        break;
                    case 7:
                        //newAnimal = this.summonNaturesAlly7(animalName + " " + i, druidLevel, this.addedAnimalType7());
                        break;
                    case 8:
                        //newAnimal = this.summonNaturesAlly8(animalName + " " + i, druidLevel, this.addedAnimalType8());
                        break;
                    case 9:
                        //newAnimal = this.summonNaturesAlly9(animalName + " " + i, druidLevel, this.addedAnimalType9());
                        break;
                }
                if (newAnimal != undefined) {
                    summonedAnimals.push(newAnimal);
                    this.addedAnimalType1(undefined);
                    this.addedAnimalType2(undefined);
                }
                else {
                    //TODO: Better error handling
                    alert("Please select Animal Type.");
                }

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
            //case SummonNaturesAlly2.ElementalSmall:
            //    newAnimal = new ElementalSmall(name, rounds);
            //    break;
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

}