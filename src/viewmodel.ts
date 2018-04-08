import * as ko from "knockout";

import { Size, CreatureType } from "./model/enums";
import { Druid } from "./model/druid";
import { Creature } from "./model/creature";
import { Summon } from "./summon";

class CreaturesViewModel {
    druid: KnockoutObservable<Druid>;
    pets: KnockoutObservableArray<Creature>;
    currentRound: KnockoutObservable<number>;
    editName: KnockoutObservable<boolean>;

    creatureSummoner: Summon;

    summonNatureLevel: KnockoutObservable<number>;
    summonCreatureLevel: KnockoutObservable<number>;
    addedCreatureName: KnockoutObservable<string>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets = ko.observableArray();
        this.currentRound = ko.observable(1);

        this.editName = ko.observable(false);

        this.creatureSummoner = new Summon();

        this.summonNatureLevel = ko.observable(0);
        this.summonCreatureLevel = ko.observable(0);

        this.addedCreatureName = ko.observable("Squeaky");
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

    deleteCreature(creatureToDelete: Creature) {
        this.pets.remove(creatureToDelete);
    }

    editDruidName() {
        this.editName(true);
    }

    editCreatureName(petToEdit: Creature) {
        petToEdit.editName(true);
    }

    selectSummon(spellLevel: number) {
        this.summonNatureLevel(spellLevel);
    }

    selectSummonCreatureLevel(creatureLevel: number) {
        this.summonCreatureLevel(creatureLevel);
    }

    Summon() {
        let newCreatures: Creature[];
        newCreatures = this.creatureSummoner.Summon(this.druid().level(), this.summonNatureLevel(), this.summonCreatureLevel(), this.addedCreatureName());
        for (let creature of newCreatures) {
            this.pets.push(creature);
        }
        if (newCreatures.length > 0) {
            this.summonNatureLevel(0);
            this.summonCreatureLevel(0);
        }
    }

}

ko.applyBindings(new CreaturesViewModel(new Druid("Courtney", 1)));