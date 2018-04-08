import * as ko from "knockout";

import { Size, CreatureType, ElementalType, Element } from "./model/enums";
import { SummonNaturesAlly1, SummonNaturesAlly2, SummonNaturesAlly3 } from "./model/enums";
import { SummonNaturesAlly4, SummonNaturesAlly5, SummonNaturesAlly6 } from "./model/enums";
import { SummonNaturesAlly7, SummonNaturesAlly8, SummonNaturesAlly9 } from "./model/enums";
import { Creature } from "./model/creature";

//TODO Isn't there an easier way to import a bunch of models?
import { Elemental } from "./model/elementals/elemental";
import { AirElemental } from "./model/elementals/airelemental";
import { EarthElemental } from "./model/elementals/earthelemental";
import { FireElemental } from "./model/elementals/fireelemental";
import { WaterElemental } from "./model/elementals/waterelemental";

import { DireRat } from "./model/natureally1/direrat";
import { Dog } from "./model/natureally1/dog";
import { Dolphin } from "./model/natureally1/dolphin";
import { Eagle } from "./model/natureally1/eagle";
import { FireBeetle } from "./model/natureally1/firebeetle";
import { GiantCentipede } from "./model/natureally1/giantcentipede";
import { Mite } from "./model/natureally1/mite";
import { PoisonousFrog } from "./model/natureally1/poisonousfrog";
import { Pony } from "./model/natureally1/pony";
import { Stirge } from "./model/natureally1/stirge";
import { Viper } from "./model/natureally1/viper";

import { GiantAntWorker } from "./model/natureally2/giantantworker";
import { GiantFrog } from "./model/natureally2/giantfrog";
import { GiantSpider } from "./model/natureally2/giantspider";
import { GoblinDog } from "./model/natureally2/goblindog";
import { Horse } from "./model/natureally2/horse";
import { Hyena } from "./model/natureally2/hyena";
import { Octopus } from "./model/natureally2/octopus";
import { Squid } from "./model/natureally2/squid";
import { Wolf } from "./model/natureally2/wolf";

import { Ape } from "./model/natureally3/ape";
import { Auroch } from "./model/natureally3/auroch";
import { Boar } from "./model/natureally3/boar";
import { Cheetah } from "./model/natureally3/cheetah";
import { ConstrictorSnake } from "./model/natureally3/constrictorsnake";
import { Crocodile } from "./model/natureally3/crocodile";
import { DireBat } from "./model/natureally3/direbat";
import { ElectricEel } from "./model/natureally3/electriceel";
import { GiantAnt } from "./model/natureally3/giantant";
import { GiantCrab } from "./model/natureally3/giantcrab";
import { Leopard } from "./model/natureally3/leopard";
import { MonitorLizard } from "./model/natureally3/monitorlizard";
import { Shark } from "./model/natureally3/shark";
import { Wolverine } from "./model/natureally3/wolverine";

import { Bison } from "./model/natureally4/bison";
import { DireApe } from "./model/natureally4/direape";
import { DireBoar } from "./model/natureally4/direboar";
import { DireWolf } from "./model/natureally4/direwolf";
import { GiantAntDrone } from "./model/natureally4/giantantdrone";
import { GiantScorpion } from "./model/natureally4/giantscorpion";
import { GiantStagBeetle } from "./model/natureally4/giantstagbeetle";
import { GiantWasp } from "./model/natureally4/giantwasp";
import { Griffon } from "./model/natureally4/griffon";
import { GrizzlyBear } from "./model/natureally4/grizzlybear";
import { Lion } from "./model/natureally4/lion";
import { Mephit } from "./model/natureally4/mephit";
import { Owlbear } from "./model/natureally4/owlbear";
import { Rhinoceros } from "./model/natureally4/rhinoceros";
import { Satyr } from "./model/natureally4/satyr";
import { Tiger } from "./model/natureally4/tiger";

import { Cyclops } from "./model/natureally5/cyclops";
import { DireLion } from "./model/natureally5/direlion";
import { Ettin } from "./model/natureally5/ettin";
import { GiantMorayEel } from "./model/natureally5/giantmorayeel";
import { Girallon } from "./model/natureally5/girallon";
import { Manticore } from "./model/natureally5/manticore";
import { Orca } from "./model/natureally5/orca";
import { WoollyRhinoceros } from "./model/natureally5/woollyrhinoceros";

import { Bulette } from "./model/natureally6/bulette";
import { DireBear } from "./model/natureally6/direbear";
import { DireTiger } from "./model/natureally6/diretiger";
import { Elephant } from "./model/natureally6/elephant";
import { GiantOctopus } from "./model/natureally6/giantoctopus";
import { HillGiant } from "./model/natureally6/hillgiant";
import { StoneGiant } from "./model/natureally6/stonegiant";

import { DireCrocodile } from "./model/natureally7/direcrocodile";
import { DireShark } from "./model/natureally7/direshark";
import { FireGiant } from "./model/natureally7/firegiant";
import { FrostGiant } from "./model/natureally7/frostgiant";
import { GiantSquid } from "./model/natureally7/giantsquid";
import { Mastodon } from "./model/natureally7/mastodon";
import { Roc } from "./model/natureally7/roc";

import { CloudGiant } from "./model/natureally8/cloudgiant";
import { PurpleWorm } from "./model/natureally8/purpleworm";

import { Pixie } from "./model/natureally9/pixie";
import { StormGiant } from "./model/natureally9/stormgiant";


export class SummonNaturesAlly {
    summonNaturesAlly1Choices: KnockoutObservableArray<string>;
    summonNaturesAlly2Choices: KnockoutObservableArray<string>;
    summonNaturesAlly3Choices: KnockoutObservableArray<string>;
    summonNaturesAlly4Choices: KnockoutObservableArray<string>;
    summonNaturesAlly5Choices: KnockoutObservableArray<string>;
    summonNaturesAlly6Choices: KnockoutObservableArray<string>;
    summonNaturesAlly7Choices: KnockoutObservableArray<string>;
    summonNaturesAlly8Choices: KnockoutObservableArray<string>;
    summonNaturesAlly9Choices: KnockoutObservableArray<string>;

    addedCreatureType1: KnockoutObservable<SummonNaturesAlly1>;
    addedCreatureType2: KnockoutObservable<SummonNaturesAlly2>;
    addedCreatureType3: KnockoutObservable<SummonNaturesAlly3>;
    addedCreatureType4: KnockoutObservable<SummonNaturesAlly4>;
    addedCreatureType5: KnockoutObservable<SummonNaturesAlly5>;
    addedCreatureType6: KnockoutObservable<SummonNaturesAlly6>;
    addedCreatureType7: KnockoutObservable<SummonNaturesAlly7>;
    addedCreatureType8: KnockoutObservable<SummonNaturesAlly8>;
    addedCreatureType9: KnockoutObservable<SummonNaturesAlly9>;

    constructor() {
        this.addedCreatureType1 = ko.observable();
        this.addedCreatureType2 = ko.observable();
        this.addedCreatureType3 = ko.observable();
        this.addedCreatureType4 = ko.observable();
        this.addedCreatureType5 = ko.observable();
        this.addedCreatureType6 = ko.observable();
        this.addedCreatureType7 = ko.observable();
        this.addedCreatureType8 = ko.observable();
        this.addedCreatureType9 = ko.observable();

        this.summonNaturesAlly1Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly1) {
            this.summonNaturesAlly1Choices.push(creature);
        }

        this.summonNaturesAlly2Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly2) {
            this.summonNaturesAlly2Choices.push(creature);
        }

        this.summonNaturesAlly3Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly3) {
            this.summonNaturesAlly3Choices.push(creature);
        }

        this.summonNaturesAlly4Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly4) {
            this.summonNaturesAlly4Choices.push(creature);
        }

        this.summonNaturesAlly5Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly5) {
            this.summonNaturesAlly5Choices.push(creature);
        }

        this.summonNaturesAlly6Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly6) {
            this.summonNaturesAlly6Choices.push(creature);
        }

        this.summonNaturesAlly7Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly7) {
            this.summonNaturesAlly7Choices.push(creature);
        }

        this.summonNaturesAlly8Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly8) {
            this.summonNaturesAlly8Choices.push(creature);
        }

        this.summonNaturesAlly9Choices = ko.observableArray();
        for (let creature in SummonNaturesAlly9) {
            this.summonNaturesAlly9Choices.push(creature);
        }
    }

    //TODO: Move RollDice somewhere where both viewmodel and other classes can use it
    rollDice(numberOfDice: number, typeOfDice: number) {
        let result: number = 0;
        console.log("Rolling " + numberOfDice + "d" + typeOfDice);
        for (let i: number = 0; i < numberOfDice; i++) {
            let roll: number = Math.floor(Math.random() * typeOfDice) + 1;
            result += roll;
            console.log("Rolled a " + roll);
        }
        console.log("Total of dice rolls is a " + result);
        return result;
    }

    summonNaturesAlly(druidLevel: number, spellLevel: number, creatureLevel: number, creatureName: string) {
        let summonedCreatures: Creature[] = [];
        let numberOfCreatures: number = 0;
        console.log("Cast Summon Nature's Ally " + spellLevel + " for creature level " + creatureLevel);
        //TODO: Add user-visible validation and error messages
        if (spellLevel == 0 || creatureLevel == 0) {
            alert("Please select both a spell level and an creature level.");
        }
        else if (spellLevel < 1 || spellLevel > 9) {
            console.log("Spell level of " + spellLevel + " is invalid.");
        }
        else if (creatureLevel < 1 || creatureLevel > 9 || creatureLevel > spellLevel) {
            console.log("Creature level of " + creatureLevel + " is invalid.");
        }
        else {
            if (spellLevel == creatureLevel) {
                numberOfCreatures = 1;
            }
            else if (spellLevel > creatureLevel) {
                if (spellLevel == creatureLevel + 1) {
                    //Summon 1d3 creatures of this level
                    numberOfCreatures = this.rollDice(1, 3);
                }
                else {
                    //Summon 1d4+1 creatures of this level
                    numberOfCreatures = this.rollDice(1, 4) + 1;
                }
            }
            console.log("Summon " + numberOfCreatures + " creatures of this level");
            for (let i = 1; i <= numberOfCreatures; i++) {
                let newCreature: Creature;
                switch (creatureLevel) {
                    case 1:
                        newCreature = this.summonNaturesAlly1(creatureName + " " + i, druidLevel, this.addedCreatureType1());
                        break;
                    case 2:
                        newCreature = this.summonNaturesAlly2(creatureName + " " + i, druidLevel, this.addedCreatureType2());
                        break;
                    case 3:
                        newCreature = this.summonNaturesAlly3(creatureName + " " + i, druidLevel, this.addedCreatureType3());
                        break;
                    case 4:
                        newCreature = this.summonNaturesAlly4(creatureName + " " + i, druidLevel, this.addedCreatureType4());
                        break;
                    case 5:
                        newCreature = this.summonNaturesAlly5(creatureName + " " + i, druidLevel, this.addedCreatureType5());
                        break;
                    case 6:
                        newCreature = this.summonNaturesAlly6(creatureName + " " + i, druidLevel, this.addedCreatureType6());
                        break;
                    case 7:
                        newCreature = this.summonNaturesAlly7(creatureName + " " + i, druidLevel, this.addedCreatureType7());
                        break;
                    case 8:
                        newCreature = this.summonNaturesAlly8(creatureName + " " + i, druidLevel, this.addedCreatureType8());
                        break;
                    case 9:
                        newCreature = this.summonNaturesAlly9(creatureName + " " + i, druidLevel, this.addedCreatureType9());
                        break;
                }
                if (newCreature != undefined) {
                    summonedCreatures.push(newCreature);
                }
            }
            if (summonedCreatures.length > 0) {
                this.addedCreatureType1(undefined);
                this.addedCreatureType2(undefined);
                this.addedCreatureType3(undefined);
                this.addedCreatureType4(undefined);
                this.addedCreatureType5(undefined);
                this.addedCreatureType6(undefined);
                this.addedCreatureType7(undefined);
                this.addedCreatureType8(undefined);
                this.addedCreatureType9(undefined);
            }
            else {
                //TODO: Better error handling
                alert("Please select Creature Type.");
            }
        }
        return summonedCreatures;
    }

    summonNaturesAlly1(name: string, rounds: number, creatureType: SummonNaturesAlly1) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly1.DireRat:
                newCreature = new DireRat(name, rounds);
                break;
            case SummonNaturesAlly1.Dog:
                newCreature = new Dog(name, rounds);
                break;
            case SummonNaturesAlly1.Dolphin:
                newCreature = new Dolphin(name, rounds);
                break;
            case SummonNaturesAlly1.Eagle:
                newCreature = new Eagle(name, rounds);
                break;
            case SummonNaturesAlly1.FireBeetle:
                newCreature = new FireBeetle(name, rounds);
                break;
            case SummonNaturesAlly1.GiantCentipede:
                newCreature = new GiantCentipede(name, rounds);
                break;
            case SummonNaturesAlly1.Mite:
                newCreature = new Mite(name, rounds);
                break;
            case SummonNaturesAlly1.PoisonousFrog:
                newCreature = new PoisonousFrog(name, rounds);
                break;
            case SummonNaturesAlly1.Pony:
                newCreature = new Pony(name, rounds);
                break;
            case SummonNaturesAlly1.Stirge:
                newCreature = new Stirge(name, rounds);
                break;
            case SummonNaturesAlly1.Viper:
                newCreature = new Viper(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly2(name: string, rounds: number, creatureType: SummonNaturesAlly2) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly2.ElementalSmallAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.ElementalSmallEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.ElementalSmallFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.ElementalSmallWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Small);
                break;
            case SummonNaturesAlly2.GiantAntWorker:
                newCreature = new GiantAntWorker(name, rounds);
                break;
            case SummonNaturesAlly2.GiantFrog:
                newCreature = new GiantFrog(name, rounds);
                break;
            case SummonNaturesAlly2.GiantSpider:
                newCreature = new GiantSpider(name, rounds);
                break;
            case SummonNaturesAlly2.GoblinDog:
                newCreature = new GoblinDog(name, rounds);
                break;
            case SummonNaturesAlly2.Horse:
                newCreature = new Horse(name, rounds);
                break;
            case SummonNaturesAlly2.Hyena:
                newCreature = new Hyena(name, rounds);
                break;
            case SummonNaturesAlly2.Octopus:
                newCreature = new Octopus(name, rounds);
                break;
            case SummonNaturesAlly2.Squid:
                newCreature = new Squid(name, rounds);
                break;
            case SummonNaturesAlly2.Wolf:
                newCreature = new Wolf(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly3(name: string, rounds: number, creatureType: SummonNaturesAlly3) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly3.Ape:
                newCreature = new Ape(name, rounds);
                break;
            case SummonNaturesAlly3.Auroch:
                newCreature = new Auroch(name, rounds);
                break;
            case SummonNaturesAlly3.Boar:
                newCreature = new Boar(name, rounds);
                break;
            case SummonNaturesAlly3.Cheetah:
                newCreature = new Cheetah(name, rounds);
                break;
            case SummonNaturesAlly3.ConstrictorSnake:
                newCreature = new ConstrictorSnake(name, rounds);
                break;
            case SummonNaturesAlly3.Crocodile:
                newCreature = new Crocodile(name, rounds);
                break;
            case SummonNaturesAlly3.DireBat:
                newCreature = new DireBat(name, rounds);
                break;
            case SummonNaturesAlly3.ElectricEel:
                newCreature = new ElectricEel(name, rounds);
                break;
            case SummonNaturesAlly3.GiantAnt:
                newCreature = new GiantAnt(name, rounds);
                break;
            case SummonNaturesAlly3.GiantCrab:
                newCreature = new GiantCrab(name, rounds);
                break;
            case SummonNaturesAlly3.Leopard:
                newCreature = new Leopard(name, rounds);
                break;
            case SummonNaturesAlly3.MonitorLizard:
                newCreature = new MonitorLizard(name, rounds);
                break;
            case SummonNaturesAlly3.Shark:
                newCreature = new Shark(name, rounds);
                break;
            case SummonNaturesAlly3.Wolverine:
                newCreature = new Wolverine(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly4(name: string, rounds: number, creatureType: SummonNaturesAlly4) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly4.ElementalMediumAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.ElementalMediumEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.ElementalMediumFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.ElementalMediumWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Medium);
                break;
            case SummonNaturesAlly4.Bison:
                newCreature = new Bison(name, rounds);
                break;
            case SummonNaturesAlly4.DireApe:
                newCreature = new DireApe(name, rounds);
                break;
            case SummonNaturesAlly4.DireBoar:
                newCreature = new DireBoar(name, rounds);
                break;
            case SummonNaturesAlly4.DireWolf:
                newCreature = new DireWolf(name, rounds);
                break;
            case SummonNaturesAlly4.GiantAntDrone:
                newCreature = new GiantAntDrone(name, rounds);
                break;
            case SummonNaturesAlly4.GiantScorpion:
                newCreature = new GiantScorpion(name, rounds);
                break;
            case SummonNaturesAlly4.GiantStagBeetle:
                newCreature = new GiantStagBeetle(name, rounds);
                break;
            case SummonNaturesAlly4.GiantWasp:
                newCreature = new GiantWasp(name, rounds);
                break;
            case SummonNaturesAlly4.Griffon:
                newCreature = new Griffon(name, rounds);
                break;
            case SummonNaturesAlly4.GrizzlyBear:
                newCreature = new GrizzlyBear(name, rounds);
                break;
            case SummonNaturesAlly4.Lion:
                newCreature = new Lion(name, rounds);
                break;
            case SummonNaturesAlly4.Mephit:
                newCreature = new Mephit(name, rounds);
                break;
            case SummonNaturesAlly4.Owlbear:
                newCreature = new Owlbear(name, rounds);
                break;
            case SummonNaturesAlly4.Rhinoceros:
                newCreature = new Rhinoceros(name, rounds);
                break;
            case SummonNaturesAlly4.Satyr:
                newCreature = new Satyr(name, rounds);
                break;
            case SummonNaturesAlly4.Tiger:
                newCreature = new Tiger(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly5(name: string, rounds: number, creatureType: SummonNaturesAlly5) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly5.ElementalLargeAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.ElementalLargeEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.ElementalLargeFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.ElementalLargeWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Large);
                break;
            case SummonNaturesAlly5.Cyclops:
                newCreature = new Cyclops(name, rounds);
                break;
            case SummonNaturesAlly5.DireLion:
                newCreature = new DireLion(name, rounds);
                break;
            case SummonNaturesAlly5.Ettin:
                newCreature = new Ettin(name, rounds);
                break;
            case SummonNaturesAlly5.GiantMorayEel:
                newCreature = new GiantMorayEel(name, rounds);
                break;
            case SummonNaturesAlly5.Girallon:
                newCreature = new Girallon(name, rounds);
                break;
            case SummonNaturesAlly5.Manticore:
                newCreature = new Manticore(name, rounds);
                break;
            case SummonNaturesAlly5.Orca:
                newCreature = new Orca(name, rounds);
                break;
            case SummonNaturesAlly5.WoollyRhinoceros:
                newCreature = new WoollyRhinoceros(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly6(name: string, rounds: number, creatureType: SummonNaturesAlly6) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly6.ElementalHugeAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.ElementalHugeEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.ElementalHugeFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.ElementalHugeWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Huge);
                break;
            case SummonNaturesAlly6.Bulette:
                newCreature = new Bulette(name, rounds);
                break;
            case SummonNaturesAlly6.DireBear:
                newCreature = new DireBear(name, rounds);
                break;
            case SummonNaturesAlly6.DireTiger:
                newCreature = new DireTiger(name, rounds);
                break;
            case SummonNaturesAlly6.Elephant:
                newCreature = new Elephant(name, rounds);
                break;
            case SummonNaturesAlly6.GiantOctopus:
                newCreature = new GiantOctopus(name, rounds);
                break;
            case SummonNaturesAlly6.HillGiant:
                newCreature = new HillGiant(name, rounds);
                break;
            case SummonNaturesAlly6.StoneGiant:
                newCreature = new StoneGiant(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly7(name: string, rounds: number, creatureType: SummonNaturesAlly7) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly7.ElementalGreaterAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.ElementalGreaterEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.ElementalGreaterFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.ElementalGreaterWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Greater);
                break;
            case SummonNaturesAlly7.DireCrocodile:
                newCreature = new DireCrocodile(name, rounds);
                break;
            case SummonNaturesAlly7.DireShark:
                newCreature = new DireShark(name, rounds);
                break;
            case SummonNaturesAlly7.FireGiant:
                newCreature = new FireGiant(name, rounds);
                break;
            case SummonNaturesAlly7.FrostGiant:
                newCreature = new FrostGiant(name, rounds);
                break;
            case SummonNaturesAlly7.GiantSquid:
                newCreature = new GiantSquid(name, rounds);
                break;
            case SummonNaturesAlly7.Mastodon:
                newCreature = new Mastodon(name, rounds);
                break;
            case SummonNaturesAlly7.Roc:
                newCreature = new Roc(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly8(name: string, rounds: number, creatureType: SummonNaturesAlly8) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly8.ElementalElderAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.ElementalElderEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.ElementalElderFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.ElementalElderWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Elder);
                break;
            case SummonNaturesAlly8.CloudGiant:
                newCreature = new CloudGiant(name, rounds);
                break;
            case SummonNaturesAlly8.PurpleWorm:
                newCreature = new PurpleWorm(name, rounds);
                break;
        }
        return newCreature;
    }

    summonNaturesAlly9(name: string, rounds: number, creatureType: SummonNaturesAlly9) {
        let newCreature: Creature;
        switch (creatureType) {
            case SummonNaturesAlly9.Pixie:
                newCreature = new Pixie(name, rounds);
                break;
            case SummonNaturesAlly9.StormGiant:
                newCreature = new StormGiant(name, rounds);
                break;
        }
        return newCreature;
    }

}