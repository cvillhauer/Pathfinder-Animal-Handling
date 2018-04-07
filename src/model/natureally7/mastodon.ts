import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Mastodon extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Mastodon";
        this.image = "https://i.pinimg.com/originals/2e/a5/f4/2ea5f4fc1c32874a4efe4e9032165909.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elephant.html#elephant-mastodon";
        this.hitpoints = ko.observable(133);
        this.size = Size.Huge;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "power attack", "reach 15ft"];
        this.skills = ["Perception +24"];
        this.armorclass = 21;
        this.attack = ["Gore +21 2d8+12", "Slam +20 2d6+12", "Trample 2d8+18 DC 29"];
        this.speed = 40;

        this.cmb = 24;
        this.cmd = 35;
        this.fort = 14;
        this.ref = 10;
        this.will = 7;

        this.str = 34;
        this.dex = 12;
        this.con = 21;
        this.int = 2;
        this.wis = 13;
        this.cha = 7;
    }
}