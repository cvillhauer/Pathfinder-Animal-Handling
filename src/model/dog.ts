import * as ko from "knockout";
import { Animal } from "model/animal";

export class Dog extends Animal{
    //Dog specs located at http://paizo.com/pathfinderRPG/prd/bestiary/dog.html#dog

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dog"
        this.image = "http://www.beastsofwar.com/wp-content/uploads/2014/10/Guard-Dog.png";
        this.hitpoints = ko.observable(6);
        this.size = "Small";
        this.abilities = ["low-light vision", "scent"];
        this.skills = ["Acrobatics +1", "Perception +8", "Survival +1"];
        this.armorclass = 13;
        this.attack = "Bite +2, 1d4+1";
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