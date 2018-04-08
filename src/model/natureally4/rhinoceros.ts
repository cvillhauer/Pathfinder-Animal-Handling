import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Rhinoceros extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Rhinoceros";
        this.image = "https://pre00.deviantart.net/dda4/th/pre/i/2013/049/2/1/rhinoceros_by_prodigyduck-d5ve638.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/rhinoceros.html#rhinoceros";
        this.hitpoints = ko.observable(42);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["scent", "reach 5ft"];
        this.skills = ["Perception +12"];
        this.armorclass = 16;
        this.attack = ["Gore +8 2d6+9", "Powerful Charge - Gore 4d6+12"];
        this.speed = 40;

        this.cmb = 10;
        this.cmd = 20;
        this.fort = 10;
        this.ref = 4;
        this.will = 2;

        this.str = 22;
        this.dex = 10;
        this.con = 19;
        this.int = 2;
        this.wis = 13;
        this.cha = 5;
    }
}