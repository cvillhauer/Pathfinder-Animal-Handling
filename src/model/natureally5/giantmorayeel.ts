import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class GiantMorayEel extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Moray Eel";
        this.image = "https://i.pinimg.com/originals/02/55/98/0255988b0afc03aa7c69a84bd286f428.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/eel.html#eel-giant-moray";
        this.hitpoints = ko.observable(52);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 10ft"];
        this.skills = ["Escape Artist +10", "Perception +7", "Stealth +8", "Swim +14"];
        this.armorclass = 19;
        this.attack = ["Bite +11 2d6+9 plus grab", "Grapple +16", "Gnaw 2d6+9", "Bite +11 1d6+3"];
        this.speed = 30;

        this.cmb = 12;
        this.cmd = 24;
        this.fort = 8;
        this.ref = 9;
        this.will = 3;

        this.str = 22;
        this.dex = 14;
        this.con = 16;
        this.int = 1;
        this.wis = 12;
        this.cha = 8;
    }
}