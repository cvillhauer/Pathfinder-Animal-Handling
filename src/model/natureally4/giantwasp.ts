import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class GiantWasp extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Wasp";
        this.image = "https://ironbombs.files.wordpress.com/2014/03/wasp.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wasp.html#wasp-giant";
        this.hitpoints = ko.observable(34);
        this.size = Size.Large;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "immune to mind affects", "fly 60ft", "reach 5ft"];
        this.skills = ["Fly +3", "Perception +9"];
        this.armorclass = 14;
        this.attack = ["Sting +6 1d8+6", "Poison DC 18 1d2 Dex"];
        this.speed = 20;

        this.cmb = 8;
        this.cmd = 19;
        this.fort = 8;
        this.ref = 2;
        this.will = 2;

        this.str = 18;
        this.dex = 12;
        this.con = 18;
        this.int = 0;
        this.wis = 13;
        this.cha = 11;
    }
}