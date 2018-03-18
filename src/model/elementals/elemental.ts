import * as ko from "knockout";
import { Size, CreatureType, ElementalType } from "../enums";
import { Animal } from "../animal";

export class Elemental extends Animal {

    element: Element;
    elementalType: ElementalType;

    constructor(name: string, rounds: number, element: Element, elementalType: ElementalType) {
        super(name, rounds);
        this.element = element;
        this.elementalType = elementalType;

        this.description = elementalType + " " + element + " Elemental";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elemental.html";
        this.size = this.calculateSize(elementalType);
        this.type = CreatureType.Outsider;
        this.abilities = ["immune to bleed, paralysis, poison, sleep, stun", "immune to critical hits, flanking, sneak attacks", "darkvision 60ft"];
    }

    calculateSize(elementalType: ElementalType) {
        let size: Size;
        switch (elementalType) {
            case ElementalType.Small:
                size = Size.Small;
                break;
            case ElementalType.Medium:
                size = Size.Medium;
                break;
            case ElementalType.Large:
                size = Size.Large;
                break;
            case ElementalType.Huge:
            case ElementalType.Greater:
            case ElementalType.Elder:
                size = Size.Huge;
                break;
        }
        return size;
    }

    calculateStats() {
        switch (this.elementalType) {
            case ElementalType.Small:
                this.calculateStatsSmall();
                break;
            case ElementalType.Medium:
                this.calculateStatsMedium();
                break;
            case ElementalType.Large:
                this.calculateStatsLarge();
                break;
            case ElementalType.Huge:
                this.calculateStatsHuge();
                break;
            case ElementalType.Greater:
                this.calculateStatsGreater();
                break;
            case ElementalType.Elder:
                this.calculateStatsElder();
                break;
        }
    }

    calculateStatsSmall() {
        //Implemented in subclasses
    }

    calculateStatsMedium() {
        //Implemented in subclasses
    }

    calculateStatsLarge() {
        //Implemented in subclasses
    }

    calculateStatsHuge() {
        //Implemented in subclasses
    }

    calculateStatsGreater() {
        //Implemented in subclasses
    }

    calculateStatsElder() {
        //Implemented in subclasses
    }
}