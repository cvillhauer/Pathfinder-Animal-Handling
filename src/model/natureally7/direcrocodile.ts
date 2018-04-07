import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class DireCrocodile extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Crocodile";
        this.image = "https://orig00.deviantart.net/b2e2/f/2009/201/2/3/sea_crocodile_by_cururo.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/crocodile.html#crocodile-dire";
        this.hitpoints = ko.observable(138);
        this.size = Size.Gargantuan;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "hold breath", "sprint", "reach 15ft", "swim 30ft"];
        this.skills = ["Perception +14", "Stealth +0", "Swim +21"];
        this.armorclass = 21;
        this.attack = ["Bite +18 3d6+13 plus grab", "Grapple +30", "Tail Slap +13 4d8+6", "Death Roll 3d8+19 plus trip", "Swallow Whole 3d6+13, AC 16, 13"];
        this.speed = 20;

        this.cmb = 26;
        this.cmd = 36;
        this.fort = 15;
        this.ref = 8;
        this.will = 8;

        this.str = 37;
        this.dex = 10;
        this.con = 25;
        this.int = 1;
        this.wis = 14;
        this.cha = 2;
    }
}