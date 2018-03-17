import * as ko from "knockout";
import { Size, CreatureType, ElementalType } from "../enums";
import { Elemental } from "./elemental";

export class FireElemental extends Elemental {

    element: Element;
    elementalType: ElementalType;

    constructor(name: string, rounds: number, element: Element, elementalType: ElementalType) {
        super(name, rounds, element, elementalType);

        this.image = "http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Elementals/images/MediumAirElemental.jpg";
        this.abilities.push("");
        this.speed = 100;

        this.calculateStats();
    }

    calculateStatsSmall() {
        this.hitpoints = ko.observable(0);
        this.skills = [];
        this.armorclass = 0;
        this.attack = ["whirlwind DC 12"];

        this.cmb = 0;
        this.cmd = 0;
        this.fort = 0;
        this.ref = 0;
        this.will = 0;

        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }

    calculateStatsMedium() {
        this.hitpoints = ko.observable(0);
        this.skills = [];
        this.armorclass = 0;
        this.attack = ["whirlwind DC 12"];

        this.cmb = 0;
        this.cmd = 0;
        this.fort = 0;
        this.ref = 0;
        this.will = 0;

        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }

    calculateStatsLarge() {
        this.hitpoints = ko.observable(0);
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 10ft");
        this.skills = [];
        this.armorclass = 0;
        this.attack = ["whirlwind DC 12"];

        this.cmb = 0;
        this.cmd = 0;
        this.fort = 0;
        this.ref = 0;
        this.will = 0;

        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }

    calculateStatsHuge() {
        this.hitpoints = ko.observable(0);
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 15ft");
        this.skills = [];
        this.armorclass = 0;
        this.attack = ["whirlwind DC 12"];

        this.cmb = 0;
        this.cmd = 0;
        this.fort = 0;
        this.ref = 0;
        this.will = 0;

        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }

    calculateStatsGreater() {
        this.hitpoints = ko.observable(0);
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 15ft");
        this.skills = [];
        this.armorclass = 0;
        this.attack = ["whirlwind DC 12"];

        this.cmb = 0;
        this.cmd = 0;
        this.fort = 0;
        this.ref = 0;
        this.will = 0;

        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }

    calculateStatsElder() {
        this.hitpoints = ko.observable(0);
        this.abilities.push("DR 5/-");
        this.abilities.push("reach 15ft");
        this.skills = [];
        this.armorclass = 0;
        this.attack = ["whirlwind DC 12"];

        this.cmb = 0;
        this.cmd = 0;
        this.fort = 0;
        this.ref = 0;
        this.will = 0;

        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
    }
}