import * as ko from "knockout";

export class Animal {
    name: KnockoutObservable<string>;
    size: string;

    constructor(name: string) {
        this.name = ko.observable(name);
        this.size = "Medium";
    }
}