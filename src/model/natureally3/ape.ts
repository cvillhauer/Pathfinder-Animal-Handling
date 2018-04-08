import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Ape extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Ape";
        this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/1/15/Gorilla.jpg/250px-Gorilla.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/ape.html#ape";
        this.hitpoints = ko.observable(19);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 10ft", "climb 30ft"];
        this.skills = ["Acrobatics +6", "Climb +14", "Perception +8"];
        this.armorclass = 14;
        this.attack = ["Slam +3 1d6+2", "Slam +3 1d6+2"];
        this.speed = 30;

        this.cmb = 5;
        this.cmd = 17;
        this.fort = 7;
        this.ref = 5;
        this.will = 2;

        this.str = 15;
        this.dex = 15;
        this.con = 14;
        this.int = 2;
        this.wis = 12;
        this.cha = 7;
    }
}