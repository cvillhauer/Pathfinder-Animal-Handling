import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Animal } from "../animal";

export class Mephit extends Animal {

    constructor(name: string, rounds: number) {
        super(name, rounds);

        let mephitType: string = prompt("What Mephit type? \r\n Air, Dust, Earth, Fire, Ice, Magma, Ooze, Salt, Steam, Water").toLowerCase();

        this.description = "Mephit";
        this.image = "";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/mephit.html#";
        this.hitpoints = ko.observable(19);
        this.size = Size.Small;
        this.type = CreatureType.Outsider;
        this.abilities = ["darkvision 60ft", "fly 40ft", "fast healing 2 - environment", "DR 5/magic"];
        this.skills = ["Bluff +8", "Fly +10", "Perception +6", "Stealth +12"];
        this.armorclass = 17;
        this.attack = ["Claw +5 1d3+1", "Claw +5 1d3+1", "Summon Mephit 25% chance, once"];
        this.speed = 30;

        this.cmb = 3;
        this.cmd = 15;
        this.fort = 2;
        this.ref = 5;
        this.will = 3;

        this.str = 13;
        this.dex = 15;
        this.con = 12;
        this.int = 6;
        this.wis = 11;
        this.cha = 14;

        switch (mephitType) {
            case "air":
                this.image = "https://i.pinimg.com/originals/e8/22/0d/e8220d381913e4c161774b6afffa7b46.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d8 slashing");
                this.attack.push("Blur");
                this.attack.push("Gust of Wind");
                break;
            case "dust":
                this.image = "https://i.pinimg.com/736x/2a/a7/00/2aa70036fe0010f537ebf0439cfaeac2--monster-art-concept-art.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d4 plus sickened 3 rounds");
                this.attack.push("Blur");
                this.attack.push("Wind Wall");
                break;
            case "earth":
                this.image = "https://s-media-cache-ak0.pinimg.com/originals/ce/35/35/ce3535c37cbb746ed8a27d21ede3b5a9.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d8 blugeoning");
                this.abilities.push("enlarge person, self");
                this.abilities.push("soften earth and stone");
                break;
            case "fire":
                this.image = "https://i.pinimg.com/originals/1f/68/a1/1f68a1423da784f8e8ee02614df78d34.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d8 fire");
                this.attack.push("Scorching Ray");
                this.attack.push("Heat Metal DC 14");
                this.abilities.push("immune to fire");
                this.abilities.push("vulnerable to cold");
                break;
            case "ice":
                this.image = "https://i.pinimg.com/originals/38/91/08/389108771354b5802a702ad951e00e66.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d4 cold plus sickened 3 rounds");
                this.attack.push("Magic Missile");
                this.attack.push("Chill Metal DC 14");
                this.abilities.push("immune to cold");
                this.abilities.push("vulnerable to fire");
                break;
            case "magma":
                this.image = "https://i.pinimg.com/originals/4f/84/74/4f8474dd5804eb1abe7aaa7df04bf303.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d8 fire");
                this.attack.push("Pyrotechnics");
                this.abilities.push("immune to fire");
                this.abilities.push("vulnerable to cold");
                this.abilities.push("magma form");
                break;
            case "ooze":
                this.image = "https://mimir.net/mephits/smoke.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d4 acid plus sickened 3 rounds");
                this.attack.push("Acid Arrow");
                this.attack.push("Stinking Cloud");
                this.abilities.push("swim 30ft");
                break;
            case "salt":
                this.image = "https://img00.deviantart.net/452e/i/2015/108/5/2/dust_mephit_by_prodigyduck-d7b24m2.png";
                this.attack.push("Breath 15ft cone DC 13 1d4 slashing plus sickened 3 rounds");
                this.attack.push("Glitterdust");
                this.attack.push("Dehydrate");
                break;
            case "steam":
                this.image = "https://i.pinimg.com/originals/a9/c2/6d/a9c26d36c8ec7a1535bfb3fd151c0a60.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d4 fire plus sickened 3 rounds");
                this.attack.push("Blur");
                this.attack.push("Boiling Rain");
                this.abilities.push("immune to fire");
                this.abilities.push("vulnerable to cold");
                break;
            case "water":
                this.image = "https://i.pinimg.com/originals/5c/5e/86/5c5e8657ffc0133e7da9e970ccb8450a.jpg";
                this.attack.push("Breath 15ft cone DC 13 1d8 acid");
                this.attack.push("Acid Arrow");
                this.attack.push("Stinking Cloud");
                this.abilities.push("swim 30ft");
                break;
        }
    }
}