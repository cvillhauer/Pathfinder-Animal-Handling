import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Pixie extends Animal{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Pixie";
        this.image = "https://i.pinimg.com/originals/89/e9/8a/89e98a4f062907373b6b3f59d8c84e41.png";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/pixie.html#pixie";
        this.hitpoints = ko.observable(18);
        this.size = Size.Small;
        this.type = CreatureType.Fey;
        this.abilities = ["low-light vision", "invisible at will", "DR 10/cold iron", "spell resistance 15", "detect chaos, evil, good, law", "permanent image", "shield", "fly 60ft"];
        this.skills = ["Acrobatics +12", "Bluff +10", "Escape Artist +12", "Fly +18", "Know nature +10", "Perception +9", "Sense Motive +9", "Stealth +16", "Use Magic Device +10"];
        this.armorclass = 18;
        this.attack = ["Short sword +8 1d4-2", "Longbow +8 1d6-2", "Special Arrows - Sleep, DC 15", "Detect Thoughts DC 15", "Dispel Magic", "Entangle DC 14", "Lesser Confusion DC 14", "Irresistible Dance DC 21"];
        this.speed = 20;

        this.cmb = -1;
        this.cmd = 15;
        this.fort = 2;
        this.ref = 9;
        this.will = 6;

        this.str = 7;
        this.dex = 21;
        this.con = 12;
        this.int = 16;
        this.wis = 15;
        this.cha = 16;
    }
}