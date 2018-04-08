import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Wolf extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Wolf";
        this.image = "https://vignette.wikia.nocookie.net/rollplaywestmarches/images/3/35/Worg.jpg/revision/latest?cb=20150210055421";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wolf.html#wolf";
        this.hitpoints = ko.observable(13);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent"];
        this.skills = ["Perception +8", "Stealth +6", "Survival +1"];
        this.armorclass = 14;
        this.attack = ["Bite +2 1d6+1 plus trip"];
        this.speed = 50;

        this.cmb = 2;
        this.cmd = 14;
        this.fort = 5;
        this.ref = 5;
        this.will = 1;

        this.str = 13;
        this.dex = 15;
        this.con = 15;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}