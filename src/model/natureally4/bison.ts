import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Bison extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Bison";
        this.image = "https://img00.deviantart.net/9c0e/i/2012/235/1/9/bison_beast_by_prodigyduck-d5c77mh.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/herdAnimal.html#herd-animal-bison";
        this.hitpoints = ko.observable(42);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "power attack", "reach 5ft"];
        this.skills = ["Perception +8"];
        this.armorclass = 17;
        this.attack = ["Gore +10 2d6+12", "Trample DC 20 2d6+12", "Stampede"];
        this.speed = 40;

        this.cmb = 12;
        this.cmd = 22;
        this.fort = 8;
        this.ref = 4;
        this.will = 1;

        this.str = 27;
        this.dex = 10;
        this.con = 19;
        this.int = 2;
        this.wis = 11;
        this.cha = 4;
    }
}