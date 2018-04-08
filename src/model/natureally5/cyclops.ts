import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Cyclops extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Cyclops";
        this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/9/9d/Aebos.jpg/250px-Aebos.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/cyclops.html#cyclops";
        this.hitpoints = ko.observable(65);
        this.size = Size.Large;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "ferocity", "reach 10ft", "great cleave", "power attack"];
        this.skills = ["Intimidate +9", "Perception +11", "Profession soothsayer +10", "Sense Motive +5", "Survival +6"];
        this.armorclass = 19;
        this.attack = ["Flash of Insight", "Greataxe +11 3d6+7", "Greataxe +6 3d6+7", "Heavy Crossbow +5 2d8"];
        this.speed = 30;

        this.cmb = 13;
        this.cmd = 22;
        this.fort = 9;
        this.ref = 2;
        this.will = 4;

        this.str = 21;
        this.dex = 8;
        this.con = 15;
        this.int = 10;
        this.wis = 13;
        this.cha = 8;
    }
}