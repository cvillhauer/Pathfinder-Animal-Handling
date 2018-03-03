import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Squid extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Squid";
        this.image = "https://pre00.deviantart.net/d23c/th/pre/i/2006/228/3/8/ice_element_giant_squid_by_njoo.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/squid.html#squid";
        this.hitpoints = ko.observable(13);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "jet 240ft"];
        this.skills = ["Perception +7", "Swim +10"];
        this.armorclass = 13;
        this.attack = ["Bite +4 1d3+2", "Tentacles +2 1d4+1 plus grab", "Ink Cloud"];
        this.speed = 60;

        this.cmb = 4;
        this.cmd = 16;
        this.fort = 3;
        this.ref = 7;
        this.will = 2;

        this.str = 15;
        this.dex = 15;
        this.con = 11;
        this.int = 2;
        this.wis = 12;
        this.cha = 2;
    }
}