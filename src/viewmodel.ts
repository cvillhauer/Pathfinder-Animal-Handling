import * as ko from "knockout";

import { Druid } from "./model/druid";
import { Animal } from "./model/animal";
import { DireRat } from "./model/direrat";
import { Dog } from "./model/dog";
import { Dolphin } from "./model/dolphin";

class AnimalsViewModel {
    druid: KnockoutObservable<Druid>;
    pets: KnockoutObservableArray<DireRat>;

    addedAnimalName: KnockoutObservable<string>;
    addedAnimalType: KnockoutObservable<string>;
    addedAnimalRounds: KnockoutObservable<number>;

    constructor(druid: Druid) {
        this.druid = ko.observable(druid);
        this.pets =  ko.observableArray();
        
        this.addedAnimalName = ko.observable("Squeaky");
        this.addedAnimalType = ko.observable("Dire Rat");
        this.addedAnimalRounds = ko.observable(1);
    }

    incrementDruidLevel() {
        this.druid().increaseLevel(1);
    }

    createAnimal(){
        if(this.addedAnimalType() == "Dire Rat")
        {
            this.pets.push(new DireRat(this.addedAnimalName(), this.addedAnimalRounds()));
        }
        else if(this.addedAnimalType() == "Dog")
        {
            this.pets.push(new Dog(this.addedAnimalName(), this.addedAnimalRounds()));
        }
        else if(this.addedAnimalType() == "Dolphin")
        {
            this.pets.push(new Dolphin(this.addedAnimalName(), this.addedAnimalRounds()));
        }
    }

    deleteAnimal(){
        console.log("Delete not implemented yet.");
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));