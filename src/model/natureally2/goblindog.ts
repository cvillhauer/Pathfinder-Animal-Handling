import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class GoblinDog extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Goblin Dog";
        this.image = "https://orig00.deviantart.net/e5f8/f/2007/297/a/a/goblin_dog_by_njoo.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/goblinDog.html#goblin-dog";
        this.hitpoints = ko.observable(9);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "immune to disease"];
        this.skills = ["Perception +1", "Stealth +6"];
        this.armorclass = 13;
        this.attack = ["Bite +2 1d6+3", "Allergic Reaction DC 12"];
        this.speed = 50;

        this.cmb = 2;
        this.cmd = 14;
        this.fort = 4;
        this.ref = 4;
        this.will = 1;

        this.str = 15;
        this.dex = 14;
        this.con = 15;
        this.int = 2;
        this.wis = 12;
        this.cha = 8;
    }
}