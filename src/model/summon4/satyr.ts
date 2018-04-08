import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Satyr extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Satyr";
        this.image = "http://orig01.deviantart.net/4eaa/f/2009/296/a/4/satyr_for_paizo_publishing_by_michaeljaecks.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/satyr.html#satyr";
        this.hitpoints = ko.observable(44);
        this.size = Size.Medium;
        this.type = CreatureType.Fey;
        this.abilities = ["low-light vision", "DR 5/cold iron"];
        this.skills = ["Bluff +15", "Diplomacy +15", "Disguise +9", "Intimidate +9", "Know nature +10", "Perception +10", "Perform +19", "Stealth +17", "Survival +7"];
        this.armorclass = 18;
        this.attack = ["Dagger +6 1d4+2", "Horns +1 1d6+1", "Short Bow +6 1d6", "Pipes DC 18", "Fear DC 18", "Summon Nature's Ally III"];
        this.speed = 40;

        this.cmb = 6;
        this.cmd = 18;
        this.fort = 4;
        this.ref = 8;
        this.will = 8;

        this.str = 14;
        this.dex = 15;
        this.con = 15;
        this.int = 12;
        this.wis = 14;
        this.cha = 19;
    }
}