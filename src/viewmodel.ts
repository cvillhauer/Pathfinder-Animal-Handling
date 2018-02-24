import * as ko from "knockout";

import { Druid } from "model/druid";
import { Animal } from "model/animal";
import { DireRat } from "./model/direrat";

class AnimalsViewModel {
    druid: KnockoutObservable<Druid>;
    pets: KnockoutObservableArray<DireRat>;

    addedAnimalName: KnockoutObservable<string>;
    addedAnimalRounds: KnockoutObservable<number>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets =  ko.observableArray();
        
        this.addedAnimalName = ko.observable("Squeaky");
        this.addedAnimalRounds = ko.observable(1);
    }

    incrementDruidLevel() {
        this.druid().increaseLevel(1);
    }

    createAnimal(){
        this.pets.push(new DireRat(this.addedAnimalName(), this.addedAnimalRounds()));
    }

    deleteAnimal(){
        console.log("Delete not implemented yet.");
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));