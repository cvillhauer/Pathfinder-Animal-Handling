import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class PurpleWorm extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Purple Worm";
        this.image = "https://i.pinimg.com/originals/a2/ac/da/a2acda8c35b5a0d9569a592fd96d1ac3.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/purpleWorm.html#purple-worm";
        this.hitpoints = ko.observable(200);
        this.size = Size.Gargantuan;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvision 60ft", "tremorsense", "power attack", "awesome blow", "burrow 20ft", "swim 10ft", "reach 15ft"];
        this.skills = ["Perception +18", "Swim +20"];
        this.armorclass = 26;
        this.attack = ["Bite +25 4d8+12 plus grab ", "Grapple +36", "Sting +25 2d8+12", "Poison DC 25 1d4 Str", "Swallow Whole 4d8+18, AC 21, 20 hp"];
        this.speed = 20;

        this.cmb = 32;
        this.cmd = 40;
        this.fort = 17;
        this.ref = 8;
        this.will = 4;

        this.str = 35;
        this.dex = 6;
        this.con = 25;
        this.int = 1;
        this.wis = 8;
        this.cha = 8;
    }
}