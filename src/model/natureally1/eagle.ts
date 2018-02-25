import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Eagle extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Eagle";
        this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Animals/images/EagleLarge.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/eagle.html#eagle";
        this.hitpoints = ko.observable(5);
        this.size = Size.Small;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision"];
        this.skills = ["Fly +8", "Perception +10"];
        this.armorclass = 14;
        this.attack = ["Talon +3 1d4", "Talon +3 1d4", "Bite +3 1d4"];
        this.speed = 80;

        this.cmb = -1;
        this.cmd = 11;
        this.fort = 3;
        this.ref = 4;
        this.will = 2;

        this.str = 10;
        this.dex = 15;
        this.con = 12;
        this.int = 2;
        this.wis = 15;
        this.cha = 7;
    }
}