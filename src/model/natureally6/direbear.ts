import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class DireBear extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Bear";
        this.image = "https://i.redd.it/hp95ytei7fez.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bear.html#bear-dire";
        this.hitpoints = ko.observable(95);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 5ft"];
        this.skills = ["Perception +12", "Swim +19"];
        this.armorclass = 18;
        this.attack = ["Bite +13 1d8+7", "Claw +13 1d6+7 plus grab", "Claw +13 1d6+7 plus grab", "Grapple +19"];
        this.speed = 40;

        this.cmb = 15;
        this.cmd = 26;
        this.fort = 12;
        this.ref = 8;
        this.will = 4;

        this.str = 25;
        this.dex = 13;
        this.con = 21;
        this.int = 2;
        this.wis = 12;
        this.cha = 10;
    }
}