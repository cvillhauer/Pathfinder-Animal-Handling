import * as ko from "knockout";
import { Size, CreatureType } from "./enums";
import { Animal } from "./animal";

export class Viper extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Viper";
        this.image = "https://pre00.deviantart.net/f3fe/th/pre/i/2015/108/b/c/cave_viper_by_bryansyme-d79yo8f.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/familiar.html#viper";
        this.hitpoints = ko.observable(3);
        this.size = Size.Tiny;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "climb 20ft", "swim 20ft"];
        this.skills = ["Climb 11", "Perception +9", "Stealth +15", "Swim +11"];
        this.armorclass = 16;
        this.attack = ["Bite +5 1d2-2", "Poison DC 9 1d2 Con"];
        this.speed = 20;

        this.cmb = 1;
        this.cmd = 8;
        this.fort = 1;
        this.ref = 5;
        this.will = 1;

        this.str = 4;
        this.dex = 17;
        this.con = 8;
        this.int = 1;
        this.wis = 13;
        this.cha = 2;
    }
}