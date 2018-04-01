import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Orca extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dolphin (Orca)";
        this.image = "https://images-na.ssl-images-amazon.com/images/I/71a4xW%2BgrRL._SX466_.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/dolphin.html#dolphin-orca";
        this.hitpoints = ko.observable(67);
        this.size = Size.Huge;
        this.type = CreatureType.Animal;
        this.abilities = ["blindsight 120ft", "low-light vision", "hold breath", "reach 10ft"];
        this.skills = ["Perception +19", "Swim +28"];
        this.armorclass = 16;
        this.attack = ["Bite +13 2d6+12"];
        this.speed = 80;

        this.cmb = 16;
        this.cmd = 28;
        this.fort = 9;
        this.ref = 8;
        this.will = 5;

        this.str = 27;
        this.dex = 15;
        this.con = 16;
        this.int = 2;
        this.wis = 15;
        this.cha = 6;
    }
}