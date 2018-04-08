import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class StoneGiant extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Stone Giant";
        this.image = "https://i.pinimg.com/originals/3f/bd/07/3fbd07d10ff9d8f900718cd158bfe07a.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-stone";
        this.hitpoints = ko.observable(102);
        this.size = Size.Large;
        this.type = CreatureType.Humanoid;
        this.abilities = ["darkvision 60ft", "low-light vision", "improved rock catching", "power attack", "precise shot", "quick draw", "reach 10ft"];
        this.skills = ["Climb +12", "Intimidate +12", "Perception +12", "Stealth +4"];
        this.armorclass = 22;
        this.attack = ["Greatclub +16 2d8+12", "Greatclub +11 2d8+12", "Slam +16 1d8+8", "Slam +16 1d8+8", "Rock Throw +11 1d8+12", "Rock Throw +6 1d8+12"];
        this.speed = 40;

        this.cmb = 18;
        this.cmd = 30;
        this.fort = 12;
        this.ref = 6;
        this.will = 7;

        this.str = 27;
        this.dex = 15;
        this.con = 19;
        this.int = 10;
        this.wis = 12;
        this.cha = 10;
    }
}