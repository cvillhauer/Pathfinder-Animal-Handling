import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class ElectricEel extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Electric Eel";
        this.image = "https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_880,h_495/v1394626469/q0iknfjhpzzzhajaxgie.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/eel.html#eel-electric";
        this.hitpoints = ko.observable(17);
        this.size = Size.Small;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "swim 30ft"];
        this.skills = ["Escape Artist +10", "Perception +4", "Stealth +10", "Swim +9"];
        this.armorclass = 15;
        this.attack = ["Bite +3 1d6+1", "Tail -2 touch 1d6 electricity"];
        this.speed = 5;

        this.cmb = 1;
        this.cmd = 13;
        this.fort = 7;
        this.ref = 5;
        this.will = 0;

        this.str = 13;
        this.dex = 14;
        this.con = 19;
        this.int = 1;
        this.wis = 10;
        this.cha = 6;
    }
}