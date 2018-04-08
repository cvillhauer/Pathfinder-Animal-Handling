import * as ko from "knockout";
import { Size, CreatureType } from "../enums";
import { Creature } from "../creature";

export class ConstrictorSnake extends Creature{

    constructor(name: string, rounds: number) {
        super(name, rounds);
        this.description = "Constirctor Snake";
        this.image = "http://www.heliocentric.com.au/images/titanaboa.jpg?crc=253069396";
        this.link = "http://paizo.com/pathfinderRPG/prd/bestiary/snake.html#snake-constrictor";
        this.hitpoints = ko.observable(19);
        this.size = Size.Medium;
        this.type = CreatureType.Animal;
        this.abilities = ["scent", "climb 20ft", "swim 20ft"];
        this.skills = ["Acrobatics +15", "Climb +11", "Perception +12", "Stealth +11", "Swim +11"];
        this.armorclass = 15;
        this.attack = ["Bite +5 1d4+4 plus grab", "Grapple +9", "Constrict 1d4+4"];
        this.speed = 20;

        this.cmb = 5;
        this.cmd = 18;
        this.fort = 4;
        this.ref = 6;
        this.will = 2;

        this.str = 17;
        this.dex = 17;
        this.con = 12;
        this.int = 1;
        this.wis = 12;
        this.cha = 2;
    }
}