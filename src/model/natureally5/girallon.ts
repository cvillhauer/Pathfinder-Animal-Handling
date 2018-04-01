import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Girallon extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Girallon";
        this.image = "https://i.pinimg.com/originals/03/16/64/031664ec6fd89e4ecf7cb8e25aa1b592.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/girallon.html#girallon";
        this.hitpoints = ko.observable(73);
        this.size = Size.Large;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvison 60ft", "low-light vision", "scent", "climb 40ft", "reach 10ft"];
        this.skills = ["Climb +12", "Perception +11", "Stealth +5"];
        this.armorclass = 18;
        this.attack = ["Bite +10 1d6+4", "Claw +10 1d4+4 plus rend", "Claw +10 1d4+4 plus rend", "Claw +10 1d4+4 plus rend", "Claw +10 1d4+4 plus rend", "Rend 1d4+6"];
        this.speed = 40;

        this.cmb = 12;
        this.cmd = 25;
        this.fort = 9;
        this.ref = 8;
        this.will = 5;

        this.str = 19;
        this.dex = 17;
        this.con = 18;
        this.int = 2;
        this.wis = 12;
        this.cha = 7;
    }
}