import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GiantStagBeetle extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Stag Beetle";
        this.image = "https://thetrove.net/Assets/Roll%2020/Devin%20Night/Devin%20Token%20Pack%2043%20-%20Many%20Legged%20Fiends%20(KS)/TP43_ManyLegedFiends_KS/vermin_giant_stag_beetle.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/beetle.html#beetle-giant-stag";
        this.hitpoints = ko.observable(45);
        this.size = Size.Large;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "immune to mind affects", "reach 5ft", "fly 20ft"];
        this.skills = ["Fly -6", "Perception +0"];
        this.armorclass = 17;
        this.attack = ["Bite +8 2d8+6", "Trample DC 17 1d6+6"];
        this.speed = 20;

        this.cmb = 10;
        this.cmd = 20;
        this.fort = 7;
        this.ref = 2;
        this.will = 2;

        this.str = 19;
        this.dex = 10;
        this.con = 15;
        this.int = 0;
        this.wis = 10;
        this.cha = 9;
    }
}