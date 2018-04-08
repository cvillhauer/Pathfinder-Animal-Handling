import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class GrizzlyBear extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Grizzly Bear";
        this.image = "https://i.pinimg.com/originals/92/19/d3/9219d3574771f8a02004bd9279022dd4.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/bear.html#bear-grizzly";
        this.hitpoints = ko.observable(42);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["low-light vision", "scent", "reach 5ft"];
        this.skills = ["Perception +6", "Survival +5", "Swim +14"];
        this.armorclass = 16;
        this.attack = ["Claw +7 1d6+5 plus grab", "Claw +7 1d6+5 plus grab", "Grapple +13", "Bite +7 1d6+5"];
        this.speed = 40;

        this.cmb = 9;
        this.cmd = 20;
        this.fort = 8;
        this.ref = 5;
        this.will = 2;

        this.str = 21;
        this.dex = 13;
        this.con = 19;
        this.int = 2;
        this.wis = 12;
        this.cha = 6;
    }
}