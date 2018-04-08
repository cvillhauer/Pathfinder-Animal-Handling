import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class DireShark extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Dire Shark";
        this.image = "http://adventureaweek.com/wp-content/uploads/2012/12/shark_dire__forrest_imel.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/shark.html#shark-dire";
        this.hitpoints = ko.observable(112);
        this.size = Size.Gargantuan;
        this.type = CreatureType.Animal;
        this.abilities = ["blindsense 30ft", "keen scent", "aquatic", "reach 20ft"];
        this.skills = ["Perception +25", "Swim +18"];
        this.armorclass = 23;
        this.attack = ["Bite +17 4d10+15 plus grab", "Grapple +29", "Swallow Whole 2d6+15, AC 17, 11 hp"];
        this.speed = 60;

        this.cmb = 25;
        this.cmd = 37;
        this.fort = 14;
        this.ref = 13;
        this.will = 8;

        this.str = 30;
        this.dex = 15;
        this.con = 17;
        this.int = 1;
        this.wis = 12;
        this.cha = 10;
    }
}