import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Elephant extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Elephant";
        this.image = "https://www.echidnasontheloose.com.au/images/P/elephant_trumpeting_web.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elephant.html#elephant";
        this.hitpoints = ko.observable(93);
        this.size = Size.Huge;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "power attack", "reach 10ft"];
        this.skills = ["Perception +21"];
        this.armorclass = 17;
        this.attack = ["Gore +16 2d8+10", "Slam +16 2d6+10", "Trample DC 25 2d8+15"];
        this.speed = 40;

        this.cmb = 20;
        this.cmd = 30;
        this.fort = 13;
        this.ref = 7;
        this.will = 6;

        this.str = 30;
        this.dex = 10;
        this.con = 19;
        this.int = 2;
        this.wis = 13;
        this.cha = 7;
    }
}