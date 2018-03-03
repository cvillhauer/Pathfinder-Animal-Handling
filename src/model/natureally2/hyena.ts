import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Hyena extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Hyena";
        this.image = "https://i.pinimg.com/736x/da/b1/d1/dab1d17a311616268e8af871f23f1040--hyena-harley-quinn.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/hyena.html#hyena";
        this.hitpoints = ko.observable(13);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent"];
        this.skills = ["Perception +8", "Stealth +6"];
        this.armorclass = 14;
        this.attack = ["Bite +3 1d6+3 plus trip"];
        this.speed = 50;

        this.cmb = 3;
        this.cmd = 15;
        this.fort = 5;
        this.ref = 5;
        this.will = 1;

        this.str = 14;
        this.dex = 15;
        this.con = 15;
        this.int = 2;
        this.wis = 13;
        this.cha = 6;
    }
}