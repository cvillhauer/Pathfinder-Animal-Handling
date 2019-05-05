import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Roc extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Roc";
        this.image = "https://i.pinimg.com/originals/20/ac/ad/20acad56620669208a6e6c8ec2ecc42f.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/roc.html#roc";
        this.hitpoints = ko.observable(120);
        this.size = Size.Gargantuan;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "power attack", "fly 80ft", "reach 15ft"];
        this.skills = ["Fly +7", "Perception +15"];
        this.armorclass = 22;
        this.attack = ["Talon +18 2d6+9 plus grab", "Talon +18 2d6+9", "Grapple +29", "Bite +17 2d8+9", "Flyby Attack"];
        this.speed = 20;

        this.cmb = 25;
        this.cmd = 37;
        this.fort = 13;
        this.ref = 14;
        this.will = 8;

        this.str = 28;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 11;
    }
}