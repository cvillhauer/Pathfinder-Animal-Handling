import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GiantSpider extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Spider";
        this.image = "https://i.pinimg.com/736x/2f/42/9d/2f429d7c217e618be3ad75b88ddeac29--spider-art-giant-spider.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/spider.html#spider-giant";
        this.hitpoints = ko.observable(16);
        this.size = Size.Medium;
        this.type = CreatureType.Vermin;
        this.abilities = ["darkvision 60ft", "tremorsense 60ft", "immune to mind affects", "climb 30ft"];
        this.skills = ["Climb +16", "Perception +4", "Stealth +7"];
        this.armorclass = 14;
        this.attack = ["Bite +2 1d6", "Poison DC 14 1d2 Str", "Web +5 DC 12, 2hp"];
        this.speed = 30;

        this.cmb = 2;
        this.cmd = 15;
        this.fort = 4;
        this.ref = 4;
        this.will = 1;

        this.str = 11;
        this.dex = 17;
        this.con = 12;
        this.int = 0;
        this.wis = 10;
        this.cha = 2;
    }
}