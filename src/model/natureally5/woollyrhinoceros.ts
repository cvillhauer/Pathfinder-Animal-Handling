import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class WoollyRhinoceros extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Woolly Rhinoceros";
        this.image = "https://vignette.wikia.nocookie.net/shipoffools/images/a/a4/Woolly-Rhino.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/rhinoceros.html#rhinoceros-woolly";
        this.hitpoints = ko.observable(76);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["scent", "diehard", "reach 5ft"];
        this.skills = ["Perception +15"];
        this.armorclass = 19;
        this.attack = ["Gore +14 2d8+13", "Powerful Charge - Gore 4d8+18", "Trample DC23 2d6+13"];
        this.speed = 30;

        this.cmb = 16;
        this.cmd = 26;
        this.fort = 13;
        this.ref = 6;
        this.will = 3;

        this.str = 28;
        this.dex = 10;
        this.con = 21;
        this.int = 2;
        this.wis = 13;
        this.cha = 3;
    }
}