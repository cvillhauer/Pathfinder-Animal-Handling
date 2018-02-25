import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class PoisonousFrog extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Poisonous Frog";
        this.image = "http://static2.paizo.com/image/content/PathfinderACG/PZO6818-Flybreath.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/frog.html#frog-poison";
        this.hitpoints = ko.observable(4);
        this.size = Size.Tiny
        this.type = CreatureType.Animal
        this.abilities = ["low-light vision", "swim 20ft"];
        this.skills = ["Acrobatics +5", "Perception +3", "Stealth +13", "Swim +9"];
        this.armorclass = 13;
        this.attack = ["Bite +3 1", "Poison DC 10 1d2 Con"];
        this.speed = 10;

        this.cmb = -1;
        this.cmd = 5;
        this.fort = 2;
        this.ref = 3;
        this.will = -1;

        this.str = 2;
        this.dex = 12;
        this.con = 11;
        this.int = 1;
        this.wis = 9;
        this.cha = 10;
    }
}