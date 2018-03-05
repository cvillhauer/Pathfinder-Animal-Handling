import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Boar extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Boar";
        this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Animals/images/Boar.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/boar.html#boar";
        this.hitpoints = ko.observable(18);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "ferocity"];
        this.skills = ["Perception +6"];
        this.armorclass = 14;
        this.attack = ["Gore +4 1d8+4"];
        this.speed = 40;

        this.cmb = 4;
        this.cmd = 14;
        this.fort = 6;
        this.ref = 3;
        this.will = 1;

        this.str = 17;
        this.dex = 10;
        this.con = 17;
        this.int = 2;
        this.wis = 13;
        this.cha = 4;
    }
}