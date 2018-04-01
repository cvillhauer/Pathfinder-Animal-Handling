import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class DireTiger extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Tiger";
        this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/0/05/Tiger.jpg/250px-Tiger.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/tiger.html#tiger-dire";
        this.hitpoints = ko.observable(105);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "pounce", "reach 5ft"];
        this.skills = ["Acrobatics +6", "Perception +12", "Stealth +15", "Swim +13"];
        this.armorclass = 17;
        this.attack = ["Bite +18 2d6+8 plus grab", "Grapple +23", "Claw +18 2d4+8 plus grab", "Claw +18 2d4+8 plus grab", "Rake +18 2d4+8", "Rake +18 2d4+8"];
        this.speed = 40;

        this.cmb = 19;
        this.cmd = 31;
        this.fort = 12;
        this.ref = 11;
        this.will = 5;

        this.str = 27;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 10;
    }
}