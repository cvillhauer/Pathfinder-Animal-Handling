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

    summonNaturesAlly1Choices: KnockoutObservableArray<string>;

    addedAnimalName: KnockoutObservable<string>;
    addedAnimalType: KnockoutObservable<SummonNaturesAlly1>;
    addedAnimalRounds: KnockoutObservable<number>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets = ko.observableArray();

        this.addedAnimalType = ko.observable();
        this.summonNaturesAlly1Choices = ko.observableArray();
        for (let animal in SummonNaturesAlly1) {
            this.summonNaturesAlly1Choices.push(animal);
        }

        this.addedAnimalName = ko.observable("Squeaky");
        this.addedAnimalRounds = ko.observable(this.druid().level());
    }

    incrementDruidLevel() {
        this.druid().increaseLevel(1);
    }

    createAnimal() {
        switch (this.addedAnimalType()) {
            case SummonNaturesAlly1.DireRat:
                this.pets.push(new DireRat(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Dog:
                this.pets.push(new Dog(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Dolphin:
                this.pets.push(new Dolphin(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Eagle:
                this.pets.push(new Eagle(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.FireBeetle:
                this.pets.push(new FireBeetle(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.GiantCentipede:
                this.pets.push(new GiantCentipede(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Mite:
                this.pets.push(new Mite(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.PoisonousFrog:
                this.pets.push(new PoisonousFrog(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Pony:
                this.pets.push(new Pony(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Stirge:
                this.pets.push(new Stirge(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
            case SummonNaturesAlly1.Viper:
                this.pets.push(new Viper(this.addedAnimalName(), this.addedAnimalRounds()));
                break;
        }
    }

    deleteAnimal() {
        console.log("Delete not implemented yet.");
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));