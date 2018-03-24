import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class GiantScorpion extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Scorpion";
        this.image = "http://images.uesp.net//9/9b/ON-concept-Giant_scorpion.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/scorpion.html#scorpion-giant";
        this.hitpoints = ko.observable(37);
        this.size = Size.Large;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "tremorsense 60ft", "immune to mind affects", "reach 10ft"];
        this.skills = ["Climb +8", "Perception +4", "Stealth +0"];
        this.armorclass = 16;
        this.attack = ["Claw +6 1d6+4 plus grab", "Claw +6 1d6+4 plus grab", "Grapple +12", "Sting +6 1d6+4 plus poison", "Poison DC 17 1d2 Str", "Constrict 1d6+4"];
        this.speed = 50;

        this.cmb = 8;
        this.cmd = 18;
        this.fort = 7;
        this.ref = 1;
        this.will = 1;

        this.str = 19;
        this.dex = 10;
        this.con = 16;
        this.int = 0;
        this.wis = 10;
        this.cha = 2;
    }
}