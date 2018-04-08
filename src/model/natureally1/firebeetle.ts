import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class FireBeetle extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Fire Beetle";
        this.image = "https://wrathofzombie.files.wordpress.com/2017/08/fire-beetle.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/beetle.html#beetle-fire";
        this.hitpoints = ko.observable(4);
        this.size = Size.Small;
        this.type = CreatureType.Vermin;
        this.abilities = ["low-light vision", "immune to mind affects", "luminescence 10ft"];
        this.skills = ["Fly -2", "Perception +0"];
        this.armorclass = 12;
        this.attack = ["Bite +1 1d4"];
        this.speed = 30;

        this.cmb = -1;
        this.cmd = 9;
        this.fort = 2;
        this.ref = 0;
        this.will = 0;

        this.str = 10;
        this.dex = 11;
        this.con = 11;
        this.int = 0;
        this.wis = 10;
        this.cha = 7;
    }
}