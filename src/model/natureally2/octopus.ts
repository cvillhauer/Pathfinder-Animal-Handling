import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Octopus extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Octopus";
        this.image = "https://s-media-cache-ak0.pinimg.com/originals/20/29/38/202938767c7a7befba2974ff753e8ba5.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/octopus.html#octopus";
        this.hitpoints = ko.observable(13);
        this.size = Size.Small;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "swim 30ft", "jet 200ft"];
        this.skills = ["Escape Artist +13", "Perception +1", "Stealth +20", "Swim +9"];
        this.armorclass = 15;
        this.attack = ["Bite +5 1d3+1", "Poison DC 13 1 Str", "Tentacles +3 grab", "Grapple +5", "Ink Cloud"];
        this.speed = 20;

        this.cmb = 1;
        this.cmd = 14;
        this.fort = 5;
        this.ref = 6;
        this.will = 1;

        this.str = 12;
        this.dex = 17;
        this.con = 14;
        this.int = 2;
        this.wis = 13;
        this.cha = 3;
    }
}