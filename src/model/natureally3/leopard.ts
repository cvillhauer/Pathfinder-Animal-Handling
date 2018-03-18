import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Leopard extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Leopard";
        this.image = "https://orig00.deviantart.net/9c9e/f/2009/335/6/1/6137e380b66d45cdf74ef7d44dbd4386.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/cat.html#cat-leopard";
        this.hitpoints = ko.observable(19);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "pounce", "climb 20ft"];
        this.skills = ["Acrobatics +8", "Climb +11", "Perception +5", "Stealth +11"];
        this.armorclass = 15;
        this.attack = ["Bite +6 1d6+3 plus grab", "Grapple +9", "Claw +6 1d3+3", "Claw +6 1d3+3", "Rake +6 1d3+3", "Rake +6 1d3+3"];
        this.speed = 30;

        this.cmb = 5;
        this.cmd = 19;
        this.fort = 5;
        this.ref = 7;
        this.will = 2;

        this.str = 16;
        this.dex = 19;
        this.con = 15;
        this.int = 2;
        this.wis = 13;
        this.cha = 6;
    }
}