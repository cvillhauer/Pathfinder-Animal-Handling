import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Lion extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Lion";
        this.image = "https://vignette.wikia.nocookie.net/greyhawk-chronicles/images/a/ad/Lion-animal.jpg/revision/latest?cb=20160306185717";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/lion.html#lion";
        this.hitpoints = ko.observable(32);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
        this.skills = ["Acrobatics +11", "Perception +9", "Stealth +8"];
        this.armorclass = 15;
        this.attack = ["Bite +7 1d8+5 plus grab", "Grapple +13", "Claw +7 1d4+5", "Claw +7 1d4+5", "Rake +7 1d4+5", "Rake +7 1d4+5"];
        this.speed = 40;

        this.cmb = 9;
        this.cmd = 22;
        this.fort = 6;
        this.ref = 7;
        this.will = 2;

        this.str = 21;
        this.dex = 17;
        this.con = 15;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}