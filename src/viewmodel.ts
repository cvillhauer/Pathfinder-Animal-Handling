import * as ko from "knockout";

import { Size, CreatureType, SummonNaturesAlly1 } from "./model/enums";
import { Druid } from "./model/druid";
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

class AnimalsViewModel {
    druid: KnockoutObservable<Druid>;
    pets: KnockoutObservableArray<Animal>;
    currentRound: KnockoutObservable<number>;

    summonNaturesAlly1Choices: KnockoutObservableArray<string>;
    summonNaturesAllyLevelChoices: KnockoutObservableArray<number>;

    summonNatureLevel: KnockoutObservable<number>;
    addedAnimalName: KnockoutObservable<string>;
    addedAnimalType: KnockoutObservable<SummonNaturesAlly1>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets = ko.observableArray();
        this.currentRound = ko.observable(1);

        this.summonNatureLevel = ko.observable();
        this.addedAnimalType = ko.observable();

        this.summonNaturesAllyLevelChoices = ko.observableArray();
        for (let level: number = 1; level <= 9; level++) {
            this.summonNaturesAllyLevelChoices.push(level);
        }

        this.summonNaturesAlly1Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly1) {
            this.summonNaturesAlly1Choices.push(animal);
        }

        this.addedAnimalName = ko.observable("Squeaky");
    }

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

    nextRound() {
        let petsRemaining = [];
        for (let pet of this.pets()) {
            pet.roundsLeft(pet.roundsLeft() - 1);
            if (pet.roundsLeft() >= 0) {
                petsRemaining.push(pet);
            }
        }
        this.pets(petsRemaining);
    }

    incrementDruidLevel() {
        this.druid().increaseLevel(1);
    }

    deleteAnimal(animalToDelete: Animal) {
        this.pets.remove(animalToDelete);
    }

    editAnimalName(petToEdit: Animal) {
        petToEdit.editName(true);
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

        this.pets.push(newAnimal);
    }

    summonNaturesAllyTest() {
        this.summonNaturesAlly(2, this.summonNatureLevel());
    }

    summonNaturesAlly(spellLevel: number, animalLevel: number) {
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
            for (let i = 1; i <= numberOfAnimals; i++) {
                //TODO split this up into the 9 different Summon Nature's Ally spells
                this.summonNaturesAlly1(this.addedAnimalName() + " " + i, this.druid().level(), this.addedAnimalType());
            }
        }
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));