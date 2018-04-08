import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GiantFrog extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Frog";
        this.image = "https://vignette.wikia.nocookie.net/rythiae/images/3/35/Giant_Frog_1.jpg/revision/latest?cb=20141125110711";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/frog.html#frog-giant";
        this.hitpoints = ko.observable(15);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 15ft with tongue", "swim 30ft"];
        this.skills = ["Acrobatics +9", "Perception +3", "Stealth +5", "Swim +10"];
        this.armorclass = 12;
        this.attack = ["Bite +3 1d6+2 plus grab", "Tongue +3 touch grab", "Grapple +7", "Pull 5ft", "Swallow Whole 1d4, AC 10, 1hp"];
        this.speed = 30;

        this.cmb = 3;
        this.cmd = 14;
        this.fort = 6;
        this.ref = 6;
        this.will = -1;

        this.str = 15;
        this.dex = 13;
        this.con = 16;
        this.int = 1;
        this.wis = 8;
        this.cha = 6;
    }
}