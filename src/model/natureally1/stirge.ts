import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class Stirge extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Stirge";
        this.image = "https://vignette1.wikia.nocookie.net/forgottenrealms/images/d/d2/Stirge_-_Lars_Grant-West.jpg/revision/latest?cb=20090218055114";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/stirge.html#stirge";
        this.hitpoints = ko.observable(5);
        this.size = Size.Tiny;
        this.type = CreatureType.MagicalBeast;
        this.abilities = ["darkvision 60ft", "low-light vision", "scent"];
        this.skills = ["Fly +8", "Perception +1", "Stealth +16"];
        this.armorclass = 16;
        this.attack = ["Attach +7", "Grapple +11", "Blood Drain 1 Con", "Disease - Filth Fever"];
        this.speed = 40;

        this.cmb = 3;
        this.cmd = 9;
        this.fort = 2;
        this.ref = 6;
        this.will = 1;

        this.str = 3;
        this.dex = 19;
        this.con = 10;
        this.int = 1;
        this.wis = 12;
        this.cha = 6;
    }
}