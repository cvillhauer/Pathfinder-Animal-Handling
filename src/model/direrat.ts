import * as ko from "knockout";
import { Animal } from "model/animal";

export class DireRat extends Animal{
    //Dire Rat specs located at http://paizo.com/pathfinderRPG/prd/bestiary/rat.html#rat-dire

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Rat"
        this.hitpoints = ko.observable(5);
        this.size = "Small";
        this.abilities = ["low-light vision", "scent", "climb 20ft", "swim 20ft"];
        this.skills = ["Climb +11", "Perception +11", "Stealth +11", "Swim +11"];
        this.armorclass = 14;
        this.attack = "Bite +1, 1d4";
        this.speed = 40;

        this.cmb = -1;
        this.cmd = 12;
        this.fort = 3;
        this.ref = 5;
        this.will = 1;

        this.str = 10;
        this.dex = 17;
        this.con = 12;
        this.int = 2;
        this.wis = 12;
        this.cha = 4;
    }
}