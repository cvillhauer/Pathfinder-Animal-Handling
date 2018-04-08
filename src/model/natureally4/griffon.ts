import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Griffon extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Griffon";
        this.image = "https://pre00.deviantart.net/17d5/th/pre/i/2016/218/0/c/griffin_concept_by_dleoblack-dacx7vx.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/griffon.html#griffon";
        this.hitpoints = ko.observable(42);
        this.size = Size.Large;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvision 60ft", "low-light vision", "scent", "pounce", "fly 80ft", "reach 5ft"];
        this.skills = ["Acrobatics +10", "Fly +6", "Perception +12"];
        this.armorclass = 17;
        this.attack = ["Bite +8 1d6+3", "Talon +7 1d6+3", "Talon +7 1d6+3", "Rake +7 1d4+3", "Rake +7 1d4+3"];
        this.speed = 30;

        this.cmb = 9;
        this.cmd = 21;
        this.fort = 7;
        this.ref = 6;
        this.will = 4;

        this.str = 16;
        this.dex = 15;
        this.con = 16;
        this.int = 5;
        this.wis = 13;
        this.cha = 8;
    }
}