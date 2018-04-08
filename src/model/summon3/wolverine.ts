import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Wolverine extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Wolverine";
        this.image = "http://animaldiversity.org/collections/contributors/Grzimek_mammals/Mustelidae/gulo_gulo/medium.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/wolverine.html#wolverine";
        this.hitpoints = ko.observable(22);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "burrow 10ft", "climb 10ft"];
        this.skills = ["Climb +10", "Perception +10"];
        this.armorclass = 14;
        this.attack = ["Bite +4 1d4+2", "Claw +4 1d6+2", "Claw +4 1d4+2", "Rage when damaged"];
        this.speed = 30;

        this.cmb = 4;
        this.cmd = 16;
        this.fort = 5;
        this.ref = 5;
        this.will = 2;

        this.str = 15;
        this.dex = 15;
        this.con = 15;
        this.int = 2;
        this.wis = 12;
        this.cha = 10;
    }
}