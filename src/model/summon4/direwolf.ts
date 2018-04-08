import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class DireWolf extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Wolf";
        this.image = "http://1.bp.blogspot.com/-owAXCy78Njo/TbdMuvP5NRI/AAAAAAAAAB0/8nLQ61zbzoQ/s1600/Worg.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wolf.html#wolf-dire";
        this.hitpoints = ko.observable(37);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 5ft", ];
        this.skills = ["Perception +10", "Stealth +3", "Survival +1"];
        this.armorclass = 14;
        this.attack = ["Bite +7 1d8+6 plus trip"];
        this.speed = 50;

        this.cmb = 8;
        this.cmd = 20;
        this.fort = 7;
        this.ref = 6;
        this.will = 2;

        this.str = 19;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 10;
    }
}