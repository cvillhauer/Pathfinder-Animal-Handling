import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Owlbear extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Owlbear";
        this.image = "http://orig03.deviantart.net/126f/f/2009/156/8/5/owl_bear_by_benwootten.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/owlbear.html#owlbear";
        this.hitpoints = ko.observable(47);
        this.size = Size.Large;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvision 60ft", "low-light vision", "scent", "reach 5ft"];
        this.skills = ["Perception +12"];
        this.armorclass = 15;
        this.attack = ["Claw +8 1d6+4 plus grab", "Claw +8 1d6+4 plus grab", "Grapple +14", "Bite +8 1d6+4"];
        this.speed = 30;

        this.cmb = 10;
        this.cmd = 21;
        this.fort = 10;
        this.ref = 5;
        this.will = 2;

        this.str = 19;
        this.dex = 12;
        this.con = 18;
        this.int = 2;
        this.wis = 12;
        this.cha = 10;
    }
}