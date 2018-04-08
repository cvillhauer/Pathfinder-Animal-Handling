import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Cheetah extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Cheetah";
        this.image = "https://img00.deviantart.net/bf17/i/2012/238/a/0/cheetah_running_by_prodigyduck-d5chize.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/cat.html#cat-cheetah";
        this.hitpoints = ko.observable(19);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "sprint"];
        this.skills = ["Acrobatics +8", "Perception +5", "Stealth +8"];
        this.armorclass = 15;
        this.attack = ["Bite +6 1d6+3 plus trip", "Claw +6 1d3+3", "Claw +6 1d3+3"];
        this.speed = 50;

        this.cmb = 5;
        this.cmd = 19;
        this.fort = 5;
        this.ref = 7;
        this.will = 2;

        this.str = 17;
        this.dex = 19;
        this.con = 15;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}