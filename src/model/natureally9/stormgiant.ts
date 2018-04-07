import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class StormGiant extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Storm Giant";
        this.image = "https://i.pinimg.com/originals/5d/f4/d9/5df4d9ae358f8925edf0c3fb69162bfa.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-storm";
        this.hitpoints = ko.observable(199);
        this.size = Size.Huge;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "great cleave", "power attack", "combat reflexes", "water breathing", "rock catching", "immune to electricity", "freedom of movement", "swim 30ft", "reach 15ft"];
        this.skills = ["Acrobatics +18", "Climb +17", "Craft +13", "Intimidate +20", "Perception +27", "Perform +12", "Sense Motive +24", "Swim +22"];
        this.armorclass = 28;
        this.attack = ["Greatsword +27 4d6+21", "Greatsword +22 4d6+21", "Greatsword +17 4d6+21", "Slam +26 2d6+14", "Slam +26 2d6+14", "Longbow +15 3d6+14", "Longbow +10 3d6+14", "Longbow +5 3d6+14", "Call Lightning DC 15", " Chain Lightning DC 18"];
        this.speed = 35;

        this.cmb = 30;
        this.cmd = 42;
        this.fort = 17;
        this.ref = 8;
        this.will = 13;

        this.str = 39;
        this.dex = 14;
        this.con = 23;
        this.int = 16;
        this.wis = 20;
        this.cha = 15;
    }
}