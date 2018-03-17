import * as ko from "knockout";
import { Size, CreatureType, ElementalType } from "../enums";
import { Elemental } from "./elemental";

export class EarthElemental extends Elemental {

    element: Element;
    elementalType: ElementalType;

    constructor(name: string, rounds: number, element: Element, elementalType: ElementalType) {
        super(name, rounds, element, elementalType);

        this.image = "https://pathfinderwiki.com/mediawiki/images/thumb/0/0a/Earth_elemental_1.jpg/250px-Earth_elemental_1.jpg";
        this.abilities.push("tremorsense 60ft");
        this.abilities.push("earth glide");
        this.abilities.push("burrow 20ft");
        this.abilities.push("power attack");
        this.speed = 20;

        this.calculateStats();
    }

    calculateStatsSmall() {
        this.hitpoints = ko.observable(13);
        this.skills = ["Appraise +1", "Climb +7", "Know dungeon +1", "Know planes +1", "Perception +4", "Stealth +7"];
        this.armorclass = 17;
        this.attack = ["Slam +6 1d6+4"];

        this.cmb = 4;
        this.cmd = 13;
        this.fort = 4;
        this.ref = -1;
        this.will = 3;

        this.str = 16;
        this.dex = 8;
        this.con = 13;
        this.int = 4;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsMedium() {
        this.hitpoints = ko.observable(34);
        this.abilities.push("cleave");
        this.skills = ["Appraise +1", "Climb +10", "Know dungeon +2", "Know planes +2", "Perception +7", "Stealth +3"];
        this.armorclass = 18;
        this.attack = ["Slam +9 1d8+7"];

        this.cmb = 9;
        this.cmd = 18;
        this.fort = 7;
        this.ref = 0;
        this.will = 4;

        this.str = 20;
        this.dex = 8;
        this.con = 17;
        this.int = 4;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsLarge() {
        this.hitpoints = ko.observable(68);
        this.abilities.push("cleave");
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 10ft");
        this.skills = ["Appraise +6", "Climb +15", "Know dungeon +3", "Know planes +6", "Perception +11", "Stealth +5"];
        this.armorclass = 18;
        this.attack = ["Slam +14 2d6+7", "Slam +14 2d6+7"];

        this.cmb = 16;
        this.cmd = 25;
        this.fort = 9;
        this.ref = 1;
        this.will = 6;

        this.str = 24;
        this.dex = 8;
        this.con = 17;
        this.int = 6;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsHuge() {
        this.hitpoints = ko.observable(95);
        this.abilities.push("cleave");
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Appraise +6", "Climb +18", "Know dungeon +4", "Know planes +7", "Perception +13", "Stealth +4"];
        this.armorclass = 19;
        this.attack = ["Slam +17 2d8+9", "Slam +17 2d8+9"];

        this.cmb = 21;
        this.cmd = 30;
        this.fort = 11;
        this.ref = 2;
        this.will = 7;

        this.str = 28;
        this.dex = 8;
        this.con = 19;
        this.int = 6;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsGreater() {
        this.hitpoints = ko.observable(136);
        this.abilities.push("cleave");
        this.abilities.push("DR 10/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Appraise +10", "Climb +25", "Know dungeon +10", "Know planes +13", "Perception +16", "Stealth +7"];
        this.armorclass = 21;
        this.attack = ["Slam +21 2d10+10", "Slam +21 2d10+10"];

        this.cmb = 25;
        this.cmd = 34;
        this.fort = 13;
        this.ref = 3;
        this.will = 8;

        this.str = 30;
        this.dex = 8;
        this.con = 21;
        this.int = 8;
        this.wis = 11;
        this.cha = 11;
    }

    calculateStatsElder() {
        this.hitpoints = ko.observable(168);
        this.abilities.push("cleave");
        this.abilities.push("DR 10/-");
        this.abilities.push("reach 15ft");
        this.skills = ["Appraise +19", "Climb +31", "Know dungeon +19", "Know planes +19", "Perception +19", "Stealth +10"];
        this.armorclass = 23;
        this.attack = ["Slam +26 2d10+12", "Slam +26 2d10+12"];

        this.cmb = 30;
        this.cmd = 39;
        this.fort = 15;
        this.ref = 4;
        this.will = 10;

        this.str = 34;
        this.dex = 8;
        this.con = 21;
        this.int = 10;
        this.wis = 11;
        this.cha = 11;
    }
}