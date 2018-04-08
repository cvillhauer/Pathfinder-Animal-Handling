import * as ko from "knockout";

import { Size, CreatureType, ElementalType, Element } from "./model/enums";
import { Summon1, Summon2, Summon3 } from "./model/enums";
import { Summon4, Summon5, Summon6 } from "./model/enums";
import { Summon7, Summon8, Summon9 } from "./model/enums";
import { Creature } from "./model/creature";

//TODO Isn't there an easier way to import a bunch of models?
import { Elemental } from "./model/elementals/elemental";
import { AirElemental } from "./model/elementals/airelemental";
import { EarthElemental } from "./model/elementals/earthelemental";
import { FireElemental } from "./model/elementals/fireelemental";
import { WaterElemental } from "./model/elementals/waterelemental";

import { DireRat } from "./model/summon1/direrat";
import { Dog } from "./model/summon1/dog";
import { Dolphin } from "./model/summon1/dolphin";
import { Eagle } from "./model/summon1/eagle";
import { FireBeetle } from "./model/summon1/firebeetle";
import { GiantCentipede } from "./model/summon1/giantcentipede";
import { Mite } from "./model/summon1/mite";
import { PoisonousFrog } from "./model/summon1/poisonousfrog";
import { Pony } from "./model/summon1/pony";
import { Stirge } from "./model/summon1/stirge";
import { Viper } from "./model/summon1/viper";

import { GiantAntWorker } from "./model/summon2/giantantworker";
import { GiantFrog } from "./model/summon2/giantfrog";
import { GiantSpider } from "./model/summon2/giantspider";
import { GoblinDog } from "./model/summon2/goblindog";
import { Horse } from "./model/summon2/horse";
import { Hyena } from "./model/summon2/hyena";
import { Octopus } from "./model/summon2/octopus";
import { Squid } from "./model/summon2/squid";
import { Wolf } from "./model/summon2/wolf";

import { Ape } from "./model/summon3/ape";
import { Auroch } from "./model/summon3/auroch";
import { Boar } from "./model/summon3/boar";
import { Cheetah } from "./model/summon3/cheetah";
import { ConstrictorSnake } from "./model/summon3/constrictorsnake";
import { Crocodile } from "./model/summon3/crocodile";
import { DireBat } from "./model/summon3/direbat";
import { ElectricEel } from "./model/summon3/electriceel";
import { GiantAnt } from "./model/summon3/giantant";
import { GiantCrab } from "./model/summon3/giantcrab";
import { Leopard } from "./model/summon3/leopard";
import { MonitorLizard } from "./model/summon3/monitorlizard";
import { Shark } from "./model/summon3/shark";
import { Wolverine } from "./model/summon3/wolverine";

import { Bison } from "./model/summon4/bison";
import { DireApe } from "./model/summon4/direape";
import { DireBoar } from "./model/summon4/direboar";
import { DireWolf } from "./model/summon4/direwolf";
import { GiantAntDrone } from "./model/summon4/giantantdrone";
import { GiantScorpion } from "./model/summon4/giantscorpion";
import { GiantStagBeetle } from "./model/summon4/giantstagbeetle";
import { GiantWasp } from "./model/summon4/giantwasp";
import { Griffon } from "./model/summon4/griffon";
import { GrizzlyBear } from "./model/summon4/grizzlybear";
import { Lion } from "./model/summon4/lion";
import { Mephit } from "./model/summon4/mephit";
import { Owlbear } from "./model/summon4/owlbear";
import { Rhinoceros } from "./model/summon4/rhinoceros";
import { Satyr } from "./model/summon4/satyr";
import { Tiger } from "./model/summon4/tiger";

import { Cyclops } from "./model/summon5/cyclops";
import { DireLion } from "./model/summon5/direlion";
import { Ettin } from "./model/summon5/ettin";
import { GiantMorayEel } from "./model/summon5/giantmorayeel";
import { Girallon } from "./model/summon5/girallon";
import { Manticore } from "./model/summon5/manticore";
import { Orca } from "./model/summon5/orca";
import { WoollyRhinoceros } from "./model/summon5/woollyrhinoceros";

import { Bulette } from "./model/summon6/bulette";
import { DireBear } from "./model/summon6/direbear";
import { DireTiger } from "./model/summon6/diretiger";
import { Elephant } from "./model/summon6/elephant";
import { GiantOctopus } from "./model/summon6/giantoctopus";
import { HillGiant } from "./model/summon6/hillgiant";
import { StoneGiant } from "./model/summon6/stonegiant";

import { DireCrocodile } from "./model/summon7/direcrocodile";
import { DireShark } from "./model/summon7/direshark";
import { FireGiant } from "./model/summon7/firegiant";
import { FrostGiant } from "./model/summon7/frostgiant";
import { GiantSquid } from "./model/summon7/giantsquid";
import { Mastodon } from "./model/summon7/mastodon";
import { Roc } from "./model/summon7/roc";

import { CloudGiant } from "./model/summon8/cloudgiant";
import { PurpleWorm } from "./model/summon8/purpleworm";

import { Pixie } from "./model/summon9/pixie";
import { StormGiant } from "./model/summon9/stormgiant";


export class Summon {
    Summon1Choices: KnockoutObservableArray<string>;
    Summon2Choices: KnockoutObservableArray<string>;
    Summon3Choices: KnockoutObservableArray<string>;
    Summon4Choices: KnockoutObservableArray<string>;
    Summon5Choices: KnockoutObservableArray<string>;
    Summon6Choices: KnockoutObservableArray<string>;
    Summon7Choices: KnockoutObservableArray<string>;
    Summon8Choices: KnockoutObservableArray<string>;
    Summon9Choices: KnockoutObservableArray<string>;

    addedCreatureType1: KnockoutObservable<Summon1>;
    addedCreatureType2: KnockoutObservable<Summon2>;
    addedCreatureType3: KnockoutObservable<Summon3>;
    addedCreatureType4: KnockoutObservable<Summon4>;
    addedCreatureType5: KnockoutObservable<Summon5>;
    addedCreatureType6: KnockoutObservable<Summon6>;
    addedCreatureType7: KnockoutObservable<Summon7>;
    addedCreatureType8: KnockoutObservable<Summon8>;
    addedCreatureType9: KnockoutObservable<Summon9>;

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

        this.Summon1Choices = ko.observableArray();
        for (let creature in Summon1) {
            this.Summon1Choices.push(creature);
        }

        this.Summon2Choices = ko.observableArray();
        for (let creature in Summon2) {
            this.Summon2Choices.push(creature);
        }

        this.Summon3Choices = ko.observableArray();
        for (let creature in Summon3) {
            this.Summon3Choices.push(creature);
        }

        this.Summon4Choices = ko.observableArray();
        for (let creature in Summon4) {
            this.Summon4Choices.push(creature);
        }

        this.Summon5Choices = ko.observableArray();
        for (let creature in Summon5) {
            this.Summon5Choices.push(creature);
        }

        this.Summon6Choices = ko.observableArray();
        for (let creature in Summon6) {
            this.Summon6Choices.push(creature);
        }

        this.Summon7Choices = ko.observableArray();
        for (let creature in Summon7) {
            this.Summon7Choices.push(creature);
        }

        this.Summon8Choices = ko.observableArray();
        for (let creature in Summon8) {
            this.Summon8Choices.push(creature);
        }

        this.Summon9Choices = ko.observableArray();
        for (let creature in Summon9) {
            this.Summon9Choices.push(creature);
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

    Summon(druidLevel: number, spellLevel: number, creatureLevel: number, creatureName: string) {
        let summonedCreatures: Creature[] = [];
        let numberOfCreatures: number = 0;
        console.log("Cast Summon " + spellLevel + " for creature level " + creatureLevel);
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
                        newCreature = this.Summon1(creatureName + " " + i, druidLevel, this.addedCreatureType1());
                        break;
                    case 2:
                        newCreature = this.Summon2(creatureName + " " + i, druidLevel, this.addedCreatureType2());
                        break;
                    case 3:
                        newCreature = this.Summon3(creatureName + " " + i, druidLevel, this.addedCreatureType3());
                        break;
                    case 4:
                        newCreature = this.Summon4(creatureName + " " + i, druidLevel, this.addedCreatureType4());
                        break;
                    case 5:
                        newCreature = this.Summon5(creatureName + " " + i, druidLevel, this.addedCreatureType5());
                        break;
                    case 6:
                        newCreature = this.Summon6(creatureName + " " + i, druidLevel, this.addedCreatureType6());
                        break;
                    case 7:
                        newCreature = this.Summon7(creatureName + " " + i, druidLevel, this.addedCreatureType7());
                        break;
                    case 8:
                        newCreature = this.Summon8(creatureName + " " + i, druidLevel, this.addedCreatureType8());
                        break;
                    case 9:
                        newCreature = this.Summon9(creatureName + " " + i, druidLevel, this.addedCreatureType9());
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

    Summon1(name: string, rounds: number, creatureType: Summon1) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon1.DireRat:
                newCreature = new DireRat(name, rounds);
                break;
            case Summon1.Dog:
                newCreature = new Dog(name, rounds);
                break;
            case Summon1.Dolphin:
                newCreature = new Dolphin(name, rounds);
                break;
            case Summon1.Eagle:
                newCreature = new Eagle(name, rounds);
                break;
            case Summon1.FireBeetle:
                newCreature = new FireBeetle(name, rounds);
                break;
            case Summon1.GiantCentipede:
                newCreature = new GiantCentipede(name, rounds);
                break;
            case Summon1.Mite:
                newCreature = new Mite(name, rounds);
                break;
            case Summon1.PoisonousFrog:
                newCreature = new PoisonousFrog(name, rounds);
                break;
            case Summon1.Pony:
                newCreature = new Pony(name, rounds);
                break;
            case Summon1.Stirge:
                newCreature = new Stirge(name, rounds);
                break;
            case Summon1.Viper:
                newCreature = new Viper(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon2(name: string, rounds: number, creatureType: Summon2) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon2.ElementalSmallAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Small);
                break;
            case Summon2.ElementalSmallEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Small);
                break;
            case Summon2.ElementalSmallFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Small);
                break;
            case Summon2.ElementalSmallWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Small);
                break;
            case Summon2.GiantAntWorker:
                newCreature = new GiantAntWorker(name, rounds);
                break;
            case Summon2.GiantFrog:
                newCreature = new GiantFrog(name, rounds);
                break;
            case Summon2.GiantSpider:
                newCreature = new GiantSpider(name, rounds);
                break;
            case Summon2.GoblinDog:
                newCreature = new GoblinDog(name, rounds);
                break;
            case Summon2.Horse:
                newCreature = new Horse(name, rounds);
                break;
            case Summon2.Hyena:
                newCreature = new Hyena(name, rounds);
                break;
            case Summon2.Octopus:
                newCreature = new Octopus(name, rounds);
                break;
            case Summon2.Squid:
                newCreature = new Squid(name, rounds);
                break;
            case Summon2.Wolf:
                newCreature = new Wolf(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon3(name: string, rounds: number, creatureType: Summon3) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon3.Ape:
                newCreature = new Ape(name, rounds);
                break;
            case Summon3.Auroch:
                newCreature = new Auroch(name, rounds);
                break;
            case Summon3.Boar:
                newCreature = new Boar(name, rounds);
                break;
            case Summon3.Cheetah:
                newCreature = new Cheetah(name, rounds);
                break;
            case Summon3.ConstrictorSnake:
                newCreature = new ConstrictorSnake(name, rounds);
                break;
            case Summon3.Crocodile:
                newCreature = new Crocodile(name, rounds);
                break;
            case Summon3.DireBat:
                newCreature = new DireBat(name, rounds);
                break;
            case Summon3.ElectricEel:
                newCreature = new ElectricEel(name, rounds);
                break;
            case Summon3.GiantAnt:
                newCreature = new GiantAnt(name, rounds);
                break;
            case Summon3.GiantCrab:
                newCreature = new GiantCrab(name, rounds);
                break;
            case Summon3.Leopard:
                newCreature = new Leopard(name, rounds);
                break;
            case Summon3.MonitorLizard:
                newCreature = new MonitorLizard(name, rounds);
                break;
            case Summon3.Shark:
                newCreature = new Shark(name, rounds);
                break;
            case Summon3.Wolverine:
                newCreature = new Wolverine(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon4(name: string, rounds: number, creatureType: Summon4) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon4.ElementalMediumAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Medium);
                break;
            case Summon4.ElementalMediumEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Medium);
                break;
            case Summon4.ElementalMediumFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Medium);
                break;
            case Summon4.ElementalMediumWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Medium);
                break;
            case Summon4.Bison:
                newCreature = new Bison(name, rounds);
                break;
            case Summon4.DireApe:
                newCreature = new DireApe(name, rounds);
                break;
            case Summon4.DireBoar:
                newCreature = new DireBoar(name, rounds);
                break;
            case Summon4.DireWolf:
                newCreature = new DireWolf(name, rounds);
                break;
            case Summon4.GiantAntDrone:
                newCreature = new GiantAntDrone(name, rounds);
                break;
            case Summon4.GiantScorpion:
                newCreature = new GiantScorpion(name, rounds);
                break;
            case Summon4.GiantStagBeetle:
                newCreature = new GiantStagBeetle(name, rounds);
                break;
            case Summon4.GiantWasp:
                newCreature = new GiantWasp(name, rounds);
                break;
            case Summon4.Griffon:
                newCreature = new Griffon(name, rounds);
                break;
            case Summon4.GrizzlyBear:
                newCreature = new GrizzlyBear(name, rounds);
                break;
            case Summon4.Lion:
                newCreature = new Lion(name, rounds);
                break;
            case Summon4.Mephit:
                newCreature = new Mephit(name, rounds);
                break;
            case Summon4.Owlbear:
                newCreature = new Owlbear(name, rounds);
                break;
            case Summon4.Rhinoceros:
                newCreature = new Rhinoceros(name, rounds);
                break;
            case Summon4.Satyr:
                newCreature = new Satyr(name, rounds);
                break;
            case Summon4.Tiger:
                newCreature = new Tiger(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon5(name: string, rounds: number, creatureType: Summon5) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon5.ElementalLargeAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Large);
                break;
            case Summon5.ElementalLargeEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Large);
                break;
            case Summon5.ElementalLargeFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Large);
                break;
            case Summon5.ElementalLargeWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Large);
                break;
            case Summon5.Cyclops:
                newCreature = new Cyclops(name, rounds);
                break;
            case Summon5.DireLion:
                newCreature = new DireLion(name, rounds);
                break;
            case Summon5.Ettin:
                newCreature = new Ettin(name, rounds);
                break;
            case Summon5.GiantMorayEel:
                newCreature = new GiantMorayEel(name, rounds);
                break;
            case Summon5.Girallon:
                newCreature = new Girallon(name, rounds);
                break;
            case Summon5.Manticore:
                newCreature = new Manticore(name, rounds);
                break;
            case Summon5.Orca:
                newCreature = new Orca(name, rounds);
                break;
            case Summon5.WoollyRhinoceros:
                newCreature = new WoollyRhinoceros(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon6(name: string, rounds: number, creatureType: Summon6) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon6.ElementalHugeAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Huge);
                break;
            case Summon6.ElementalHugeEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Huge);
                break;
            case Summon6.ElementalHugeFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Huge);
                break;
            case Summon6.ElementalHugeWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Huge);
                break;
            case Summon6.Bulette:
                newCreature = new Bulette(name, rounds);
                break;
            case Summon6.DireBear:
                newCreature = new DireBear(name, rounds);
                break;
            case Summon6.DireTiger:
                newCreature = new DireTiger(name, rounds);
                break;
            case Summon6.Elephant:
                newCreature = new Elephant(name, rounds);
                break;
            case Summon6.GiantOctopus:
                newCreature = new GiantOctopus(name, rounds);
                break;
            case Summon6.HillGiant:
                newCreature = new HillGiant(name, rounds);
                break;
            case Summon6.StoneGiant:
                newCreature = new StoneGiant(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon7(name: string, rounds: number, creatureType: Summon7) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon7.ElementalGreaterAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Greater);
                break;
            case Summon7.ElementalGreaterEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Greater);
                break;
            case Summon7.ElementalGreaterFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Greater);
                break;
            case Summon7.ElementalGreaterWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Greater);
                break;
            case Summon7.DireCrocodile:
                newCreature = new DireCrocodile(name, rounds);
                break;
            case Summon7.DireShark:
                newCreature = new DireShark(name, rounds);
                break;
            case Summon7.FireGiant:
                newCreature = new FireGiant(name, rounds);
                break;
            case Summon7.FrostGiant:
                newCreature = new FrostGiant(name, rounds);
                break;
            case Summon7.GiantSquid:
                newCreature = new GiantSquid(name, rounds);
                break;
            case Summon7.Mastodon:
                newCreature = new Mastodon(name, rounds);
                break;
            case Summon7.Roc:
                newCreature = new Roc(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon8(name: string, rounds: number, creatureType: Summon8) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon8.ElementalElderAir:
                newCreature = new AirElemental(name, rounds, ElementalType.Elder);
                break;
            case Summon8.ElementalElderEarth:
                newCreature = new EarthElemental(name, rounds, ElementalType.Elder);
                break;
            case Summon8.ElementalElderFire:
                newCreature = new FireElemental(name, rounds, ElementalType.Elder);
                break;
            case Summon8.ElementalElderWater:
                newCreature = new WaterElemental(name, rounds, ElementalType.Elder);
                break;
            case Summon8.CloudGiant:
                newCreature = new CloudGiant(name, rounds);
                break;
            case Summon8.PurpleWorm:
                newCreature = new PurpleWorm(name, rounds);
                break;
        }
        return newCreature;
    }

    Summon9(name: string, rounds: number, creatureType: Summon9) {
        let newCreature: Creature;
        switch (creatureType) {
            case Summon9.Pixie:
                newCreature = new Pixie(name, rounds);
                break;
            case Summon9.StormGiant:
                newCreature = new StormGiant(name, rounds);
                break;
        }
        return newCreature;
    }

}