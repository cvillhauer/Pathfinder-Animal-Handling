import * as ko from "knockout";

import { Size, CreatureType } from "./model/enums";
import { Druid } from "./model/druid";
import { Animal } from "./model/animal";
import { SummonNaturesAlly } from "./summonnaturesally";

class AnimalsViewModel {
    druid: KnockoutObservable<Druid>;
    pets: KnockoutObservableArray<Animal>;
    currentRound: KnockoutObservable<number>;
    editName: KnockoutObservable<boolean>;

    animalSummoner: SummonNaturesAlly;

    summonNatureLevel: KnockoutObservable<number>;
    summonAnimalLevel: KnockoutObservable<number>;
    addedAnimalName: KnockoutObservable<string>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets = ko.observableArray();
        this.currentRound = ko.observable(1);

        this.editName = ko.observable(false);

        this.animalSummoner = new SummonNaturesAlly();

        this.summonNatureLevel = ko.observable(0);
        this.summonAnimalLevel = ko.observable(0);

        this.addedAnimalName = ko.observable("Squeaky");
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

    editDruidName() {
        this.editName(true);
    }

    editAnimalName(petToEdit: Animal) {
        petToEdit.editName(true);
    }

    selectSummonNaturesAlly(spellLevel: number) {
        this.summonNatureLevel(spellLevel);
    }

    selectSummonAnimalLevel(animalLevel: number) {
        this.summonAnimalLevel(animalLevel);
    }

    summonNaturesAlly() {
        let newAnimals: Animal[];
        newAnimals = this.animalSummoner.summonNaturesAlly(this.druid().level(), this.summonNatureLevel(), this.summonAnimalLevel(), this.addedAnimalName());
        for (let animal of newAnimals) {
            this.pets.push(animal);
        }
        if (newAnimals.length > 0) {
            this.summonNatureLevel(0);
            this.summonAnimalLevel(0);
        }
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));