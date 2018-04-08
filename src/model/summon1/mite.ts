import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Mite extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Mite";
        this.image = "https://pathfinderwiki.com/mediawiki/images/0/04/Mite.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/mite.html#mite";
        this.hitpoints = ko.observable(3);
        this.size = Size.Small;
        this.type = CreatureType.Fey;
        this.abilities = ["DR 2/cold iron", "light sensitivity", "darkision 120ft", "low-light vision", "scent", "climb 20ft", "hatred dwarf and gnome", "vermin empathy +4"];
        this.skills = ["Climb +7", "Handle Animal +0", "Perception +5", "Ride +2", "Slight of Hand +9", "Stealth +13"];
        this.armorclass = 12;
        this.attack = ["Dagger +0 1d3-1", "Dart +2 1d3-1", "Doom DC 10"];
        this.speed = 20;

        this.cmb = -2;
        this.cmd = 9;
        this.fort = 0;
        this.ref = 3;
        this.will = 3;

        this.str = 8;
        this.dex = 13;
        this.con = 11;
        this.int = 8;
        this.wis = 13;
        this.cha = 8;
    }
}