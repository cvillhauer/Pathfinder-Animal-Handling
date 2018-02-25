import * as ko from "knockout";
import { Size, CreatureType } from "./enums";
import { Animal } from "./animal";

export class Pony extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Pony";
        this.image = "https://orig00.deviantart.net/7569/f/2013/252/4/5/tobiano_draft_horse_study_by_charreed-d6lq7pf.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/horse.html#horse-pony";
        this.hitpoints = ko.observable(13);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "docile"];
        this.skills = ["Perception +5"];
        this.armorclass = 11;
        this.attack = ["Hoof -3 1d3", "Hoof -3 1d3"];
        this.speed = 40;

        this.cmb = 2;
        this.cmd = 13;
        this.fort = 5;
        this.ref = 4;
        this.will = 0;

        this.str = 12;
        this.dex = 13;
        this.con = 14;
        this.int = 2;
        this.wis = 11;
        this.cha = 4;
    }
}