import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Auroch extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Auroch";
        this.image = "http://www.historyofinformation.com/images/3501a%20Large.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/herdAnimal.html#herd-animal-aurochs";
        this.hitpoints = ko.observable(22);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 5ft"];
        this.skills = ["Perception +9"];
        this.armorclass = 13;
        this.attack = ["Gore +7 1d8+9", "Trample DC 17 2d6+9", "Stampede"];
        this.speed = 40;

        this.cmb = 9;
        this.cmd = 19;
        this.fort = 6;
        this.ref = 3;
        this.will = 1;

        this.str = 23;
        this.dex = 10;
        this.con = 17;
        this.int = 2;
        this.wis = 11;
        this.cha = 4;
    }
}