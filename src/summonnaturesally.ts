import * as ko from "knockout";

import { Size, CreatureType, SummonNaturesAlly1, SummonNaturesAlly2 } from "./model/enums";
import { Animal } from "./model/animal";

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
import { GiantAnt } from "./model/natureally2/giantant";
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

    summonNaturesAllyLevelChoices: KnockoutObservableArray<number>;

    addedAnimalType1: KnockoutObservable<SummonNaturesAlly1>;
    addedAnimalType2: KnockoutObservable<SummonNaturesAlly2>;

    constructor() {
        this.addedAnimalType1 = ko.observable();
        this.addedAnimalType2 = ko.observable();

        this.summonNaturesAllyLevelChoices = ko.observableArray();
        for (let level: number = 1; level <= 9; level++) {
            this.summonNaturesAllyLevelChoices.push(level);
        }

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

    summonNaturesAlly(druidLevel: number, spellLevel: number, animalLevel: number, animalName: string) {
        let summonedAnimals: Animal[] = [];
        console.log("Cast Summon Nature's Ally " + spellLevel + " for animal level " + animalLevel);
        let numberOfAnimals: number = 0;
        if (spellLevel < 1 || spellLevel > 9) {
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
            console.log("Summoning animal type " + this.addedAnimalType1());
            for (let i = 1; i <= numberOfAnimals; i++) {
                //TODO split this up into the 9 different Summon Nature's Ally spells
                summonedAnimals.push(this.summonNaturesAlly1(animalName + " " + i, druidLevel, this.addedAnimalType1()));
            }
        }
        return summonedAnimals;
    }

}