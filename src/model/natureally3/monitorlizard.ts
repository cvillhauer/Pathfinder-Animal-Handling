import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class MonitorLizard extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Monitor Lizard";
        this.image = "https://78.media.tumblr.com/7048d9a0164e8f270544c4d8e51f4258/tumblr_nw5v2y2hyk1uqhshmo1_1280.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/lizard.html#lizard-monitor";
        this.hitpoints = ko.observable(22);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "swim 30ft"];
        this.skills = ["Climb +7", "Perception +8", "Stealth +10", "Swim +11"];
        this.armorclass = 15;
        this.attack = ["Bite +5 1d8+4 plus grab", "Grapple +9", "Poison DC 14 1d2 Dex onset 1 minute"];
        this.speed = 30;

        this.cmb = 5;
        this.cmd = 17;
        this.fort = 8;
        this.ref = 5;
        this.will = 2;

        this.str = 17;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}