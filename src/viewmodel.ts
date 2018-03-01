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

    addedAnimalName: KnockoutObservable<string>;
    addedAnimalType: KnockoutObservable<SummonNaturesAlly1>;
    addedAnimalRounds: KnockoutObservable<number>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets = ko.observableArray();
        this.currentRound = ko.observable(1);

        this.addedAnimalType = ko.observable();
        this.summonNaturesAlly1Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly1) {
            this.summonNaturesAlly1Choices.push(animal);
        }

        this.addedAnimalName = ko.observable("Squeaky");
        this.addedAnimalRounds = ko.observable(this.druid().level());
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

    editAnimalName(petToEdit: Animal){
        petToEdit.editName(true);
    }

    createAnimal() {
        let newAnimal: Animal;

        switch (this.addedAnimalType()) {
            case SummonNaturesAlly1.DireRat:
                newAnimal = new DireRat(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Dog:
                newAnimal = new Dog(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Dolphin:
                newAnimal = new Dolphin(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Eagle:
                newAnimal = new Eagle(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.FireBeetle:
                newAnimal = new FireBeetle(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.GiantCentipede:
                newAnimal = new GiantCentipede(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Mite:
                newAnimal = new Mite(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.PoisonousFrog:
                newAnimal = new PoisonousFrog(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Pony:
                newAnimal = new Pony(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Stirge:
                newAnimal = new Stirge(this.addedAnimalName(), this.addedAnimalRounds());
                break;
            case SummonNaturesAlly1.Viper:
                newAnimal = new Viper(this.addedAnimalName(), this.addedAnimalRounds());
                break;
        }

        this.pets.push(newAnimal);
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));