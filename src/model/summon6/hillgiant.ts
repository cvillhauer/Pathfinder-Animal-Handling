import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class HillGiant extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Hill Giant";
        this.image = "http://3.bp.blogspot.com/-INhvnEpvn_k/VLSc54sheaI/AAAAAAAAAMc/p-CvmiCsB-k/s1600/wallpaper_Giant%2C%2BHill.jpg";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/giant.html#giant-hill";
        this.hitpoints = ko.observable(85);
        this.size = Size.Large;
        this.type = CreatureType.Humanoid;
        this.abilities = ["low-light vision", "cleave", "power attack", "rock catching", "reach 10ft"];
        this.skills = ["Climb +10", "Intimidate +12", "Perception +6"];
        this.armorclass = 21;
        this.attack = ["Greatclub +14 2d8+10", "Greatclub +9 2d8+10", "Slam +13 1d8+7", "Slam +13 1d8+7", "Rock Throw +6 1d8+10"];
        this.speed = 40;

        this.cmb = 15;
        this.cmd = 24;
        this.fort = 11;
        this.ref = 2;
        this.will = 3;

        this.str = 25;
        this.dex = 8;
        this.con = 19;
        this.int = 6;
        this.wis = 10;
        this.cha = 7;
    }
}