import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Crocodile extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Crocodile";
        this.image = "https://78.media.tumblr.com/864cd2f022509d7f566ca9c4fd60cd4a/tumblr_o0n2mahH761uqhshmo1_1280.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/crocodile.html#crocodile";
        this.hitpoints = ko.observable(22);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "hold breath", "sprint", "swim 30ft"];
        this.skills = ["Perception +8", "Stealth +5", "Swim +12"];
        this.armorclass = 14;
        this.attack = ["Bite +5 1d8+4 plus grab", "Grapple +11", "Tail Slap +0 1d12+2", "Death Roll 1d8+6 plus trip"];
        this.speed = 20;

        this.cmb = 7;
        this.cmd = 18;
        this.fort = 6;
        this.ref = 4;
        this.will = 2;

        this.str = 19;
        this.dex = 12;
        this.con = 17;
        this.int = 1;
        this.wis = 12;
        this.cha = 2;
    }
}