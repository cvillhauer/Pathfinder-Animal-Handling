import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class CloudGiant extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Cloud Giant";
        this.image = "https://i.pinimg.com/originals/8a/09/d8/8a09d81bcdc2d4de2ce59a8c65a9e396.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-cloud";
        this.hitpoints = ko.observable(168);
        this.size = Size.Huge;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "scent", "great cleave", "power attack", "rock catching", "awesome blow", "levitate at will", "reach 15ft"];
        this.skills = ["Climb +19", "Craft +10", "Diplomacy +9", "Intimidate +26", "Perception +17", "Perform +8"];
        this.armorclass = 25;
        this.attack = ["Morningstar +22 4d6+18", "Morningstar +17 4d6+18", "Morningstar +12 4d6+18", "Slam +22 2d6+12", "Slam +22 2d6+12", "Rock Throw +12 2d6+18", "Obscuring Mist", "Fog Cloud"];
        this.speed = 50;

        this.cmb = 26;
        this.cmd = 37;
        this.fort = 16;
        this.ref = 6;
        this.will = 10;

        this.str = 35;
        this.dex = 13;
        this.con = 23;
        this.int = 12;
        this.wis = 16;
        this.cha = 12;
    }
}