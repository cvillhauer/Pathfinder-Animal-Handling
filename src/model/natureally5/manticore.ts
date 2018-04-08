import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Manticore extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Manticore";
        this.image = "https://i.pinimg.com/originals/33/8f/7f/338f7f30d1a199b99b4c2bc7633d0d9c.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/manticore.html#manticore";
        this.hitpoints = ko.observable(57);
        this.size = Size.Large;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvision 60ft", "low-light vision", "scent", "fly 50ft", "hover", "reach 5ft"];
        this.skills = ["Fly -3", "Perception +9", "Survival +4"];
        this.armorclass = 17;
        this.attack = ["Bite +10 1d8+5", "Claw +10 2d4+5", "Claw +10 2d4+5", "Spikes (x4) +8 1d6+5"];
        this.speed = 30;

        this.cmb = 12;
        this.cmd = 24;
        this.fort = 9;
        this.ref = 7;
        this.will = 3;

        this.str = 20;
        this.dex = 15;
        this.con = 18;
        this.int = 7;
        this.wis = 12;
        this.cha = 9;
    }
}