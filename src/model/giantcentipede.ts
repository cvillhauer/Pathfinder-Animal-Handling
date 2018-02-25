import * as ko from "knockout";
import { Size, CreatureType } from "./enums";
import { Animal } from "./animal";

export class GiantCentipede extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Centipede";
        this.image = "https://ironbombs.files.wordpress.com/2014/03/giant-centipede-smaller.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/centipede.html#centipede-giant";
        this.hitpoints = ko.observable(5);
        this.size = Size.Medium;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "immune to mind affects", "climb 40ft"];
        this.skills = ["Climb +10", "Perception +4", "Stealth +10"];
        this.armorclass = 14;
        this.attack = ["Bite +2 1d6-1", "Poison DC 13 1d3 Dex"];
        this.speed = 40;

        this.cmb = 0;
        this.cmd = 11;
        this.fort = 3;
        this.ref = 2;
        this.will = 0;

        this.str = 9;
        this.dex = 15;
        this.con = 12;
        this.int = 0;
        this.wis = 10;
        this.cha = 2;
    }
}