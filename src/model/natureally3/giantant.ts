import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GiantAnt extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Ant - Soldier";
        this.image = "https://vignette.wikia.nocookie.net/non-aliencreatures/images/5/5e/Fire_Ant_Warrior.png/revision/latest?cb=20101228091156";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ant.html#ant-giant";
        this.hitpoints = ko.observable(18);
        this.size = Size.Medium;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "scent", "immune to mind affects", "climb 20ft"];
        this.skills = ["Climb +10", "Perception +5", "Survival +5"];
        this.armorclass = 15;
        this.attack = ["Bite +3 1d6+2 plus grab", "Grapple +7", "Sting +3 1d4+2", "Poison DC 14 1d2 Str"];
        this.speed = 50;

        this.cmb = 3;
        this.cmd = 13;
        this.fort = 6;
        this.ref = 0;
        this.will = 1;

        this.str = 14;
        this.dex = 10;
        this.con = 17;
        this.int = 0;
        this.wis = 13;
        this.cha = 11;
    }
}