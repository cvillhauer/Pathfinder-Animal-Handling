import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class DireBoar extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Boar";
        this.image = "https://i2.wp.com/adventureaweek.com/wp-content/uploads/2013/07/Dire-Boar.jpg?ssl=1";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/boar.html#boar-dire";
        this.hitpoints = ko.observable(42);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "ferocity"];
        this.skills = ["Perception +12"];
        this.armorclass = 15;
        this.attack = ["Gore +8 2d6+9"];
        this.speed = 40;

        this.cmb = 10;
        this.cmd = 20;
        this.fort = 7;
        this.ref = 4;
        this.will = 2;

        this.str = 23;
        this.dex = 10;
        this.con = 17;
        this.int = 2;
        this.wis = 13;
        this.cha = 8;
    }
}