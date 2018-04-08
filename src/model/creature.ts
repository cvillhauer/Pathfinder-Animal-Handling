import * as ko from "knockout";
import { Size, CreatureType } from "./enums";

export class Creature {
    name: KnockoutObservable<string>;
    editName: KnockoutObservable<boolean>;
    description: string;
    image: string;
    link: string;
    roundsLeft: KnockoutObservable<number>;
    status: KnockoutObservable<string>;
    hitpoints: KnockoutObservable<number>;
    size: Size;
    type: CreatureType;
    abilities: string[];
    skills: string[];
    armorclass: number;
    attack: string[];
    speed: number;
    
    cmb: number; //combat maneuvers bonus
    cmd: number; //combat maneuvers defense
    fort: number; //fortitude save
    ref: number; //reflex save
    will: number; //will save

    //Ability Scores
    str: number; //strength
    dex: number; //dexterity
    con: number; //constitution
    int: number; //intelligence
    wis: number; //wisdom
    cha: number; //charisma

    constructor(name: string, rounds: number) {
        this.name = ko.observable(name);
        this.editName = ko.observable(false);
        this.roundsLeft = ko.observable(rounds);
        this.status = ko.observable("");
    }
}