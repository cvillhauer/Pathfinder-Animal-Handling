import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class DireBat extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Bat";
        this.image = "https://s-media-cache-ak0.pinimg.com/originals/59/0d/ee/590deeb0b5a84ccfb5466a643b134df4.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bat.html#bat-dire";
        this.hitpoints = ko.observable(22);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["blindsense 40ft", "fly 40ft"];
        this.skills = ["Fly +9", "Perception +12", "Stealth +4"];
        this.armorclass = 14;
        this.attack = ["Bite +5 1d8+4"];
        this.speed = 20;

        this.cmb = 7;
        this.cmd = 19;
        this.fort = 5;
        this.ref = 6;
        this.will = 3;

        this.str = 17;
        this.dex = 15;
        this.con = 13;
        this.int = 2;
        this.wis = 14;
        this.cha = 6;
    }
}