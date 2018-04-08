import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Tiger extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Tiger";
        this.image = "https://orig00.deviantart.net/b979/f/2012/194/c/9/tiger_by_thedjib-d573nqn.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/tiger.html#tiger";
        this.hitpoints = ko.observable(45);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
        this.skills = ["Acrobatics +10", "Perception +8", "Stealth +7", "Swim +11"];
        this.armorclass = 14;
        this.attack = ["Bite +9 2d6+6 plus grab", "Grapple +15", "Claw +10 1d8+6 plus grab", "Claw +10 1d8+6 plus grab", "Rake +10 1d8+6", "Rake +10 1d8+6"];
        this.speed = 40;

        this.cmb = 11;
        this.cmd = 23;
        this.fort = 8;
        this.ref = 7;
        this.will = 3;

        this.str = 23;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}