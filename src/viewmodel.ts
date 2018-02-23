import * as ko from "knockout";
import {Animal} from "model/animal";

class AnimalsViewModel {
    druid: KnockoutObservable<string>
    pet: KnockoutObservable<Animal>

    constructor(druid: string) {
        this.druid = ko.observable(druid);
        this.pet = ko.observable(new Animal("Squeaky"));
    }
}

ko.applyBindings(new AnimalsViewModel("Courtney"));