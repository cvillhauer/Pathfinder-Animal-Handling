import * as ko from "knockout";

import {Druid} from "model/druid";
import {Animal} from "model/animal";

class AnimalsViewModel
{
    druid: KnockoutObservable<Druid>
    pet: KnockoutObservable<Animal>

    constructor(druid: Druid)
    {
        this.druid = ko.observable(druid);
        this.pet = ko.observable(new Animal("Squeaky"));
    }

    incrementDruidLevel()
    {
        this.druid().increaseLevel(1);
    }

}

ko.applyBindings(new AnimalsViewModel(new Druid("Courtney", 1)));