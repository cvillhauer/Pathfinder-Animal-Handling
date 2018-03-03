import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Horse extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Horse";
        this.image = "http://darkfienix.com/wp-content/uploads/2018/01/horse1.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/horse.html#horse";
        this.hitpoints = ko.observable(15);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 5ft"];
        this.skills = ["Perception +6"];
        this.armorclass = 11;
        this.attack = ["Hoof -2 1d4+1", "Hoof -2 1d4+1"];
        this.speed = 50;

        this.cmb = 5;
        this.cmd = 17;
        this.fort = 6;
        this.ref = 5;
        this.will = 1;

        this.str = 16;
        this.dex = 14;
        this.con = 17;
        this.int = 2;
        this.wis = 13;
        this.cha = 7;
    }
}