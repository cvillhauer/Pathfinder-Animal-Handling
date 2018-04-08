import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GiantCrab extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Crab";
        this.image = "http://2.bp.blogspot.com/_Fwjw80hPmio/TOp2HbokuGI/AAAAAAAACCY/lv_SdLnlcbM/s1600/Tojanida.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/crab.html#crab-giant";
        this.hitpoints = ko.observable(19);
        this.size = Size.Medium;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "immune to mind affects", "water dependency", "swim 20ft"];
        this.skills = ["Escape Artist +10", "Perception +4", "Stealth +10", "Swim +9"];
        this.armorclass = 16;
        this.attack = ["Claw +4 1d4+2 plus grab", "Claw +4 1d4+2 plus grab", "Grapple +8", "Constrict 1d4+2"];
        this.speed = 30;

        this.cmb = 4;
        this.cmd = 15;
        this.fort = 5;
        this.ref = 2;
        this.will = 1;

        this.str = 15;
        this.dex = 13;
        this.con = 14;
        this.int = 0;
        this.wis = 10;
        this.cha = 2;
    }
}