import * as ko from "knockout";
import { Size, CreatureType, ElementalType } from "../enums";
import { Elemental } from "./elemental";

export class AirElemental extends Elemental {

    element: Element;
    elementalType: ElementalType;

    constructor(name: string, rounds: number, element: Element, elementalType: ElementalType) {
        super(name, rounds, element, elementalType);

        this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Elementals/images/MediumAirElemental.jpg";
        this.abilities.push("fly 100ft, perfect");
        this.speed = 100;

        this.calculateStats();
    }

    calculateStatsSmall() {
        this.hitpoints = ko.observable(13);
        this.skills = ["Acrobatics +7", "Escape Artist +7", "Fly +17", "Know planes +1, Perception +4", "Stealth +11"];
        this.armorclass = 17;
        this.attack = ["Flyby Attack", "Whirlwind DC 12", "Slam +6 1d4+1"];

        this.cmb = 2;
        this.cmd = 15;
        this.fort = 4;
        this.ref = 6;
        this.will = 0;

        this.str = 12;
        this.dex = 17;
        this.con = 12;
        this.int = 4;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsMedium() {
        this.hitpoints = ko.observable(30);
        this.skills = ["Acrobatics +11", "Escape Artist +9", "Fly +17", "Know planes +1, Perception +7", "Stealth +10"];
        this.armorclass = 19;
        this.attack = ["Flyby Attack", "Whirlwind DC 14", "Slam +9 1d6+3"];

        this.cmb = 6;
        this.cmd = 22;
        this.fort = 6;
        this.ref = 9;
        this.will = 1;

        this.str = 14;
        this.dex = 21;
        this.con = 14;
        this.int = 4;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsLarge() {
        this.hitpoints = ko.observable(68);
        this.abilities.push("combat reflexes");
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 10ft");
        this.skills = ["Acrobatics +15", "Escape Artist +15", "Fly +21", "Know planes +5, Perception +11", "Stealth +11"];
        this.armorclass = 21;
        this.attack = ["Flyby Attack", "Whirlwind DC 18", "Slam +14 1d8+4", "Slam +14 1d8+4"];

        this.cmb = 13;
        this.cmd = 31;
        this.fort = 9;
        this.ref = 13;
        this.will = 2;

        this.str = 18;
        this.dex = 25;
        this.con = 16;
        this.int = 6;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsHuge() {
        this.hitpoints = ko.observable(95);
        this.abilities.push("combat reflexes");
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Acrobatics +18", "Escape Artist +18", "Fly +23", "Know planes +7, Perception +13", "Stealth +9"];
        this.armorclass = 22;
        this.attack = ["Flyby Attack", "Whirlwind DC 21", "Slam +17 2d6+6", "Slam +17 2d6+6"];

        this.cmb = 18;
        this.cmd = 38;
        this.fort = 11;
        this.ref = 16;
        this.will = 5;

        this.str = 22;
        this.dex = 29;
        this.con = 18;
        this.int = 6;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsGreater() {
        this.hitpoints = ko.observable(123);
        this.abilities.push("combat reflexes");
        this.abilities.push("DR 10/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Acrobatics +25", "Escape Artist +23", "Fly +27", "Know planes +12, Perception +16", "Stealth +15"];
        this.armorclass = 25;
        this.attack = ["Flyby Attack", "Whirlwind DC 23", "Slam +21 2d8+7", "Slam +21 2d8+7"];

        this.cmb = 22;
        this.cmd = 43;
        this.fort = 12;
        this.ref = 18;
        this.will = 6;

        this.str = 24;
        this.dex = 31;
        this.con = 18;
        this.int = 8;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsElder() {
        this.hitpoints = ko.observable(152);
        this.abilities.push("combat reflexes");
        this.abilities.push("DR 10/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Acrobatics +30", "Escape Artist +30", "Fly +34", "Know planes +19, Perception +19", "Stealth +22"];
        this.armorclass = 28;
        this.attack = ["Flyby Attack", "Whirlwind DC 27", "Slam +25 2d8+9", "Slam +25 2d8+9"];

        this.cmb = 27;
        this.cmd = 49;
        this.fort = 14;
        this.ref = 21;
        this.will = 7;

        this.str = 28;
        this.dex = 33;
        this.con = 18;
        this.int = 10;
        this.wis = 11;
        this.cha = 11;
    }
}