import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Dog extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dog";
        this.image = "http://www.beastsofwar.com/wp-content/uploads/2014/10/Guard-Dog.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/dog.html#dog";
        this.hitpoints = ko.observable(6);
        this.size = Size.Small;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent"];
        this.skills = ["Acrobatics +1", "Perception +8", "Survival +1"];
        this.armorclass = 13;
        this.attack = ["Bite +2 1d4+1"];
        this.speed = 40;

        this.cmb = 0;
        this.cmd = 11;
        this.fort = 4;
        this.ref = 3;
        this.will = 1;

        this.str = 13;
        this.dex = 13;
        this.con = 15;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}