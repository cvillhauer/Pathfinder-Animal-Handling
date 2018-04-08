import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Bulette extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Bulette";
        this.image = "http://d20pfsrd.opengamingnetwork.com/wp-content/uploads/sites/12/2017/01/bulette-jr.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bulette.html#bulette";
        this.hitpoints = ko.observable(84);
        this.size = Size.Huge;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvision 60ft", "low-light vision", "scent", "tremorsense", "burrow 20ft", "leap", "savage bite", "reach 10ft"];
        this.skills = ["Acrobatics +17", "Perception +11"];
        this.armorclass = 22;
        this.attack = ["Bite +13 2d8+9", "Claw +12 2d6+6", "Claw +12 2d6+6"];
        this.speed = 40;

        this.cmb = 16;
        this.cmd = 28;
        this.fort = 11;
        this.ref = 8;
        this.will = 5;

        this.str = 23;
        this.dex = 15;
        this.con = 20;
        this.int = 2;
        this.wis = 13;
        this.cha = 6;
    }
}