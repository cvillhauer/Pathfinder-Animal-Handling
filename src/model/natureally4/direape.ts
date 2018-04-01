import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class DireApe extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Ape";
        this.image = "https://pre00.deviantart.net/de32/th/pre/i/2015/302/1/8/dire_ape_by_prodigyduck-d9esof4.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ape.html#ape-dire";
        this.hitpoints = ko.observable(30);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "climb 30ft", "reach 10ft"];
        this.skills = ["Acrobatics +6", "Climb +16", "Perception +8", "Stealth +2"];
        this.armorclass = 15;
        this.attack = ["Bite +6 1d6+4", "Claw +6 1d4+4 plus rend", "Claw +6 1d4+4 plus rend", "Rend 1d4+6"];
        this.speed = 30;

        this.cmb = 8;
        this.cmd = 20;
        this.fort = 7;
        this.ref = 6;
        this.will = 4;

        this.str = 19;
        this.dex = 15;
        this.con = 16;
        this.int = 2;
        this.wis = 12;
        this.cha = 7;
    }
}