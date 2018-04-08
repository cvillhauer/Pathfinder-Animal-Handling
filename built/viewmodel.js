define(["require", "exports", "knockout", "./model/druid", "./summon"], function (require, exports, ko, druid_1, summon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CreaturesViewModel = /** @class */ (function () {
        function CreaturesViewModel(druid) {
            this.druid = ko.observable(druid);
            this.pets = ko.observableArray();
            this.currentRound = ko.observable(1);
            this.editName = ko.observable(false);
            this.creatureSummoner = new summon_1.SummonNaturesAlly();
            this.summonNatureLevel = ko.observable(0);
            this.summonCreatureLevel = ko.observable(0);
            this.addedCreatureName = ko.observable("Squeaky");
        }
        //TODO: Move RollDice somewhere where both viewmodel and other classes can use it
        CreaturesViewModel.prototype.rollDice = function (numberOfDice, typeOfDice) {
            var result = 0;
            console.log("Rolling " + numberOfDice + "d" + typeOfDice);
            for (var i = 0; i < numberOfDice; i++) {
                var roll = Math.floor(Math.random() * typeOfDice) + 1;
                result += roll;
                console.log("Rolled a " + roll);
            }
            console.log("Total of dice rolls is a " + result);
            return result;
        };
        CreaturesViewModel.prototype.nextRound = function () {
            var petsRemaining = [];
            for (var _i = 0, _a = this.pets(); _i < _a.length; _i++) {
                var pet = _a[_i];
                pet.roundsLeft(pet.roundsLeft() - 1);
                if (pet.roundsLeft() >= 0) {
                    petsRemaining.push(pet);
                }
            }
            this.pets(petsRemaining);
        };
        CreaturesViewModel.prototype.incrementDruidLevel = function () {
            this.druid().increaseLevel(1);
        };
        CreaturesViewModel.prototype.deleteCreature = function (creatureToDelete) {
            this.pets.remove(creatureToDelete);
        };
        CreaturesViewModel.prototype.editDruidName = function () {
            this.editName(true);
        };
        CreaturesViewModel.prototype.editCreatureName = function (petToEdit) {
            petToEdit.editName(true);
        };
        CreaturesViewModel.prototype.selectSummonNaturesAlly = function (spellLevel) {
            this.summonNatureLevel(spellLevel);
        };
        CreaturesViewModel.prototype.selectSummonCreatureLevel = function (creatureLevel) {
            this.summonCreatureLevel(creatureLevel);
        };
        CreaturesViewModel.prototype.summonNaturesAlly = function () {
            var newCreatures;
            newCreatures = this.creatureSummoner.summonNaturesAlly(this.druid().level(), this.summonNatureLevel(), this.summonCreatureLevel(), this.addedCreatureName());
            for (var _i = 0, newCreatures_1 = newCreatures; _i < newCreatures_1.length; _i++) {
                var creature = newCreatures_1[_i];
                this.pets.push(creature);
            }
            if (newCreatures.length > 0) {
                this.summonNatureLevel(0);
                this.summonCreatureLevel(0);
            }
        };
        return CreaturesViewModel;
    }());
    ko.applyBindings(new CreaturesViewModel(new druid_1.Druid("Courtney", 1)));
});
//# sourceMappingURL=viewmodel.js.map