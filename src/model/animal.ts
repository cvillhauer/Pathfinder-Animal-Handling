import * as ko from "knockout";

export class Animal {
    name: string;
    description: string;
    roundsLeft: KnockoutObservable<number>;
    status: KnockoutObservable<string>;
    hitpoints: KnockoutObservable<number>;
    size: string;
    abilities: string[];
    skills: string[];
    armorclass: number;
    attack: string;
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
        this.name = name;
        this.roundsLeft = ko.observable(rounds);
        this.status = ko.observable("");
    }
}