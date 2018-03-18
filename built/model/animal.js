define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Animal = /** @class */ (function () {
        function Animal(name, rounds) {
            this.name = ko.observable(name);
            this.editName = ko.observable(false);
            this.roundsLeft = ko.observable(rounds);
            this.status = ko.observable("");
        }
        return Animal;
    }());
    exports.Animal = Animal;
});
//# sourceMappingURL=animal.js.map