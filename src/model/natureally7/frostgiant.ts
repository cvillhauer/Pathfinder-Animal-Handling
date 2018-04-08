import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class FrostGiant extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Frost Giant";
        this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/1/11/Eovath.jpg/250px-Eovath.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-frost";
        this.hitpoints = ko.observable(133);
        this.size = Size.Large;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "great cleave", "power attack", "rock catching", "immune to cold", "vulnerable to fire", "reach 10ft"];
        this.skills = ["Climb +13", "Craft +7", "Intimidate +7", "Perception +10", "Stealth +2"];
        this.armorclass = 21;
        this.attack = ["Greataxe +18 3d6+13", "Greataxe +13 3d6+13", "Slam +18 1d8+9", "Slam +18 1d8+9", "Rock Throw +9 1d8+13"];
        this.speed = 40;

        this.cmb = 20;
        this.cmd = 29;
        this.fort = 14;
        this.ref = 3;
        this.will = 6;

        this.str = 29;
        this.dex = 9;
        this.con = 20;
        this.int = 10;
        this.wis = 14;
        this.cha = 11;
    }
}