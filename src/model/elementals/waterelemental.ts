import * as ko from "knockout";
import { Size, CreatureType, ElementalType, Element } from "../enums";
import { Elemental } from "./elemental";

export class WaterElemental extends Elemental {

    element: Element;
    elementalType: ElementalType;

    constructor(name: string, rounds: number, elementalType: ElementalType) {
        super(name, rounds, Element.Water, elementalType);

        this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Elementals/images/LargeWaterElemental.jpg";
        this.abilities.push("water mastery");
        this.abilities.push("drench");
        this.abilities.push("power attack");
        this.abilities.push("swim 90ft");
        this.speed = 20;

        this.calculateStats();
    }

    calculateStatsSmall() {
        this.hitpoints = ko.observable(13);
        this.skills = ["Acrobatics +4", "Escape Artist +4", "Know planes +1", "Perception +4", "Stealth +8", "Swim +14"];
        this.armorclass = 17;
        this.attack = ["Slam +5 1d6+3", "Vortex DC 13"];

        this.cmb = 3;
        this.cmd = 13;
        this.fort = 4;
        this.ref = 3;
        this.will = 0;

        this.str = 14;
        this.dex = 10;
        this.con = 13;
        this.int = 4;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsMedium() {
        this.hitpoints = ko.observable(30);
        this.abilities.push("cleave");
        this.skills = ["Acrobatics +6", "Escape Artist +6", "Know planes +2", "Perception +5", "Stealth +6", "Swim +16"];
        this.armorclass = 17;
        this.attack = ["Slam +7 1d8+4", "Vortex DC 15"];

        this.cmb = 7;
        this.cmd = 18;
        this.fort = 6;
        this.ref = 5;
        this.will = 1;

        this.str = 16;
        this.dex = 12;
        this.con = 15;
        this.int = 4;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsLarge() {
        this.hitpoints = ko.observable(68);
        this.abilities.push("great cleave");
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 10ft");
        this.skills = ["Acrobatics +9", "Escape Artist +11", "Know planes +5", "Perception +9", "Stealth +5", "Swim +24"];
        this.armorclass = 18;
        this.attack = ["Slam +12 1d8+5", "Slam +12 1d8+5", "Vortex DC 19"];

        this.cmb = 14;
        this.cmd = 27;
        this.fort = 9;
        this.ref = 8;
        this.will = 2;

        this.str = 20;
        this.dex = 14;
        this.con = 17;
        this.int = 6;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsHuge() {
        this.hitpoints = ko.observable(95);
        this.abilities.push("great cleave");
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Acrobatics +11", "Escape Artist +15", "Know planes +7", "Perception +13", "Stealth +3", "Swim +26"];
        this.armorclass = 21;
        this.attack = ["Slam +15 2d6+7", "Slam +15 2d6+7", "Vortex DC 22"];

        this.cmb = 19;
        this.cmd = 34;
        this.fort = 11;
        this.ref = 11;
        this.will = 3;

        this.str = 24;
        this.dex = 18;
        this.con = 19;
        this.int = 6;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsGreater() {
        this.hitpoints = ko.observable(123);
        this.abilities.push("great cleave");
        this.abilities.push("DR 10/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Acrobatics +18", "Escape Artist +20", "Know planes +12", "Perception +16", "Stealth +10", "Swim +30"];
        this.armorclass = 23;
        this.attack = ["Slam +20 2d8+9", "Slam +20 2d8+9", "Vortex DC 25"];

        this.cmb = 24;
        this.cmd = 40;
        this.fort = 12;
        this.ref = 15;
        this.will = 4;

        this.str = 28;
        this.dex = 20;
        this.con = 19;
        this.int = 8;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsElder() {
        this.hitpoints = ko.observable(152);
        this.abilities.push("great cleave");
        this.abilities.push("DR 10/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Acrobatics +25", "Escape Artist +25", "Know planes +19", "Perception +19", "Stealth +17", "Swim +37"];
        this.armorclass = 24;
        this.attack = ["Slam +24 2d10+10", "Slam +24 2d10+10", "Vortex DC 28"];

        this.cmb = 28;
        this.cmd = 45;
        this.fort = 14;
        this.ref = 18;
        this.will = 5;

        this.str = 30;
        this.dex = 22;
        this.con = 19;
        this.int = 10;
        this.wis = 11;
        this.cha = 11;
    }
}