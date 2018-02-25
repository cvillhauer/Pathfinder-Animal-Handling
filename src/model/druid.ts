import * as ko from "knockout";
import {Size, CreatureType} from "./enums";

export class Druid {
    name: KnockoutObservable<string>;
    level: KnockoutObservable<number>;
    link: string;

    //Wild Shape specs located at: http://paizo.com/pathfinderRPG/prd/coreRulebook/classes/druid.html#wild-shape
    wildShapeSizes: KnockoutObservableArray<Size>;
    wildShapeTimesPerDay: KnockoutObservable<number>;
    wildShapeDuration: KnockoutObservable<number>;
    beastShape: KnockoutObservable<number>;
    elementalBody: KnockoutObservable<number>;
    plantShape: KnockoutObservable<number>;

    constructor(name: string, level: number) {
        this.name = ko.observable(name);
        this.level = ko.observable(level);
        this.link = "http://paizo.com/pathfinderRPG/prd/coreRulebook/classes/druid.html";

        this.wildShapeSizes = ko.observableArray();

        this.wildShapeTimesPerDay = ko.computed(function () {
            return Math.floor(Math.abs((this.level() - 2)) / 2);
        }, this);

        this.wildShapeDuration = ko.computed(function () {
            if (this.level() >= 4) { return this.level(); }
            else { return 0; }
        }, this);

        this.beastShape = ko.computed(function () {
            if (this.level() >= 8) { return 3; }
            else if (this.level() >= 6) { return 2; }
            else if (this.level() >= 4) { return 1; }
            else { return 0; }
        }, this);

        this.elementalBody = ko.computed(function () {
            if (this.level() >= 12) { return 4; }
            else if (this.level() >= 10) { return 3; }
            else if (this.level() >= 8) { return 2; }
            else if (this.level() >= 6) { return 1; }
            else { return 0; }
        }, this);

        this.plantShape = ko.computed(function () {
            if (this.level() >= 12) { return 3; }
            else if (this.level() >= 10) { return 2; }
            else if (this.level() >= 8) { return 1; }
            else { return 0; }
        }, this);


    }

    increaseLevel(add: number) //note: number can be negative to decrease level
    {
        this.level(this.level() + add);
        this.calculateWildShapeSizes();
    }

    calculateWildShapeSizes() {
        this.wildShapeSizes.removeAll();
        if (this.level() >= 4) {
            this.wildShapeSizes.push(Size.Medium);
            this.wildShapeSizes.push(Size.Small);
        }
        if (this.level() >= 6) {
            this.wildShapeSizes.push(Size.Tiny);
            this.wildShapeSizes.push(Size.Large);
        }
        if (this.level() >= 8) {
            this.wildShapeSizes.push(Size.Diminutive);
            this.wildShapeSizes.push(Size.Huge);
        }
    }
}