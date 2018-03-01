import * as ko from "knockout";
import { Size, CreatureType, ElementalType } from "./enums";
import { Animal } from "./animal";

export class Elemental extends Animal {

    element: Element;
    elementalType: ElementalType;

    constructor(name: string, rounds: number, element: Element, elementalType: ElementalType) {
        super(name, rounds);
        this.element = element;
        this.elementalType = elementalType;

        this.description = elementalType + " " + element + " Elemental";
        this.image = "";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/elemental.html";
        this.hitpoints = ko.observable(0);
        this.size = this.calculateSize(elementalType);
        this.type = CreatureType.Elemental;
        this.abilities = [];
        this.skills = [];
        this.armorclass = 0;
        this.attack = [];
        this.speed = 0;

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

        this.calculateStats(element);
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

    calculateStats(element: Element){
        //TODO calculate things based on element type
        //IE Air elementals have Air Mastery, Earth Elementals have Earth Glide, etc
    }
}