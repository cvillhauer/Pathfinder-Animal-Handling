import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class GiantOctopus extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Giant Octopus";
        this.image = "https://vignette.wikia.nocookie.net/pathfinder/images/f/ff/Tentacled_horror.jpg/revision/latest?cb=20091122081514";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/octopus.html#octopus-giant";
        this.hitpoints = ko.observable(90);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "swim 30ft", "jet 200ft", "combat reflexes", "reach 10ft", "reach 20ft with tentacles"];
        this.skills = ["Escape Artist +18", "Perception +8", "Stealth +18", "Swim +13"];
        this.armorclass = 18;
        this.attack = ["Bite +13 1d8+5", "Poison DC 19 1d3 Str", "Tentacles +11 1d4+2 plus grab", "Grapple +19", "Constrict 1d4+2", "Ink Cloud"];
        this.speed = 20;

        this.cmb = 15;
        this.cmd = 27;
        this.fort = 11;
        this.ref = 12;
        this.will = 7;

        this.str = 20;
        this.dex = 15;
        this.con = 17;
        this.int = 2;
        this.wis = 12;
        this.cha = 3;
    }
}