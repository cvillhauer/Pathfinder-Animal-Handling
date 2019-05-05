import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Shark extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Shark";
        this.image = "https://www.tribality.com/wp-content/uploads/2015/03/safariltd-tiger-shark-211702-0.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/shark.html#shark";
        this.hitpoints = ko.observable(22);
        this.size = Size.Large;
        this.type = CreatureType.Animal;
        this.abilities = ["blindsense 30ft", "keen scent", "aquatic", "reach 5ft"];
        this.skills = ["Perception +8", "Swim +11"];
        this.armorclass = 14;
        this.attack = ["Bite +5 1d8+4"];
        this.speed = 60;

        this.cmb = 7;
        this.cmd = 18;
        this.fort = 7;
        this.ref = 5;
        this.will = 2;

        this.str = 17;
        this.dex = 12;
        this.con = 13;
        this.int = 1;
        this.wis = 12;
        this.cha = 2;
    }
}