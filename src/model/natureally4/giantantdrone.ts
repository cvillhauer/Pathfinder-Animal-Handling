import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GiantAntDrone extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Ant - Drone";
        this.image = "https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ant.html#ant-giant";
        this.hitpoints = ko.observable(22);
        this.size = Size.Medium;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "scent", "immune to mind affects", "climb 20ft", "fly 30ft"];
        this.skills = ["Climb +12", "Perception +7", "Survival +7"];
        this.armorclass = 19;
        this.attack = ["Bite +5 1d6+4 plus grab", "Grapple +9", "Sting +5 1d4+4", "Poison DC 16 1d2 Str"];
        this.speed = 50;

        this.cmb = 5;
        this.cmd = 15;
        this.fort = 6;
        this.ref = 0;
        this.will = 1;

        this.str = 18;
        this.dex = 14;
        this.con = 21;
        this.int = 0;
        this.wis = 17;
        this.cha = 15;
    }
}