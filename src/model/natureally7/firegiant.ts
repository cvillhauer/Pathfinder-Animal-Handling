import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class FireGiant extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Fire Giant";
        this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/8/80/Fire_giant_captain.jpg/250px-Fire_giant_captain.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-fire";
        this.hitpoints = ko.observable(142);
        this.size = Size.Large;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "great cleave", "power attack", "rock catching", "immune to fire", "vulnerable to cold", "reach 10ft"];
        this.skills = ["Climb +14", "Craft +8", "Intimidate +11", "Perception +14"];
        this.armorclass = 24;
        this.attack = ["Greatsword +21 3d6+15", "Greatsword +16 3d6+15", "Greatsword +11 3d6+15", "Slam +20 1d8+10", "Slam +20 1d8+10", "Rock Throw +10 1d8+15 plus 1d6 fire"];
        this.speed = 30;

        this.cmb = 22;
        this.cmd = 31;
        this.fort = 14;
        this.ref = 4;
        this.will = 9;

        this.str = 31;
        this.dex = 9;
        this.con = 21;
        this.int = 10;
        this.wis = 14;
        this.cha = 10;
    }
}