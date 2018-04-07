import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class GiantSquid extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Squid";
        this.image = "http://www.enworld.org/forum/attachment.php?s=3817b782f3fe5ba457c58b2ba7d07097&attachmentid=74571&d=1455562963";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/squid.html#squid-giant";
        this.hitpoints = ko.observable(102);
        this.size = Size.Huge;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "combat reflexes", "jet 260ft", "reach 15ft", "reach 30 ft with tentacles"];
        this.skills = ["Perception +22", "Swim +15"];
        this.armorclass = 20;
        this.attack = ["Bite +14 2d6+7", "Arms +14 1d6+7", "Tentacles +12 4d6+3 plus grab", "Grapple +22", "Constrict 4d6+10", "Ink Cloud"];
        this.speed = 60;

        this.cmb = 18;
        this.cmd = 31;
        this.fort = 14;
        this.ref = 13;
        this.will = 5;

        this.str = 25;
        this.dex = 17;
        this.con = 19;
        this.int = 2;
        this.wis = 12;
        this.cha = 2;
    }
}