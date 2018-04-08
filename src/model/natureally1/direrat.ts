import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class DireRat extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Rat";
        this.image = "https://pathfinderwiki.com/mediawiki/images/1/12/Dire_rat.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/rat.html#rat-dire";
        this.hitpoints = ko.observable(5);
        this.size = Size.Small;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "climb 20ft", "swim 20ft"];
        this.skills = ["Climb +11", "Perception +11", "Stealth +11", "Swim +11"];
        this.armorclass = 14;
        this.attack = ["Bite +1 1d4", "Disease - Filth Fever"];
        this.speed = 40;

        this.cmb = -1;
        this.cmd = 12;
        this.fort = 3;
        this.ref = 5;
        this.will = 1;

        this.str = 10;
        this.dex = 17;
        this.con = 12;
        this.int = 2;
        this.wis = 12;
        this.cha = 4;
    }
}