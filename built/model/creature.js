define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Creature = /** @class */ (function () {
        function Creature(name, rounds) {
            this.name = ko.observable(name);
            this.editName = ko.observable(false);
            this.roundsLeft = ko.observable(rounds);
            this.status = ko.observable("");
        }
        return Creature;
    }());
    exports.Creature = Creature;
});
//# sourceMappingURL=creature.js.map