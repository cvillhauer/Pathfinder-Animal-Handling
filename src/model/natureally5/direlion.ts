import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class DireLion extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Lion";
        this.image = "https://i.pinimg.com/originals/bd/29/69/bd2969c22dedba403783d992667adfe8.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/lion.html#lion-dire";
        this.hitpoints = ko.observable(60);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
        this.skills = ["Acrobatics +11", "Perception +11", "Stealth +7"];
        this.armorclass = 15;
        this.attack = ["Bite +12 1d8+7 plus grab", "Grapple +18", "Claw +13 1d6+7", "Claw +13 1d6+7", "Rake +13 1d6+7", "Rake +13 1d6+7"];
        this.speed = 40;

        this.cmb = 14;
        this.cmd = 26;
        this.fort = 9;
        this.ref = 8;
        this.will = 3;

        this.str = 25;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 10;
    }
}