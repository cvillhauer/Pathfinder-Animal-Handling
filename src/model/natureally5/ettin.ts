import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Ettin extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Ettin";
        this.image = "https://i.pinimg.com/originals/5f/2c/d7/5f2cd775f19838458c4ffa8eb9c09a7a.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ettin.html#ettin";
        this.hitpoints = ko.observable(65);
        this.size = Size.Large;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "cleave", "power attack", "reach 10ft"];
        this.skills = ["Handle Animal +8", "Perception +12"];
        this.armorclass = 18;
        this.attack = ["Flail +12 2d6+6", "Flail +12 2d6+6", "Flail +7 2d6+6", "Flail +7 2d6+6", "Javelin +5 1d8+6", "Javelin +5 1d8+6"];
        this.speed = 40;

        this.cmb = 14;
        this.cmd = 23;
        this.fort = 9;
        this.ref = 2;
        this.will = 5;

        this.str = 23;
        this.dex = 8;
        this.con = 15;
        this.int = 6;
        this.wis = 10;
        this.cha = 11;
    }
}