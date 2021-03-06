import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Dolphin extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dolphin";
        this.image = "http://d2ydh70d4b5xgv.cloudfront.net/images/f/5/safari-ltd-monterey-bay-aquarium-sea-life-collection-bottlenose-dolphin-f2383e6f99e01e61cd2371b00314e98c.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/dolphin.html#dolphin";
        this.hitpoints = ko.observable(11);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["blindsight 120ft", "low-light vision", "hold breath"];
        this.skills = ["Perception +9"];
        this.armorclass = 13;
        this.attack = ["Slam +3 1d4+1"];
        this.speed = 80;

        this.cmb = 2;
        this.cmd = 14;
        this.fort = 4;
        this.ref = 5;
        this.will = 1;

        this.str = 12;
        this.dex = 15;
        this.con = 13;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}