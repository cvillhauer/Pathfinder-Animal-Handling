define(["require", "exports", "knockout", "./model/druid", "./summonnaturesally"], function (require, exports, ko, druid_1, summonnaturesally_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AnimalsViewModel = /** @class */ (function () {
        function AnimalsViewModel(druid) {
            this.druid = ko.observable(druid);
            this.pets = ko.observableArray();
            this.currentRound = ko.observable(1);
            this.editName = ko.observable(false);
            this.animalSummoner = new summonnaturesally_1.SummonNaturesAlly();
            this.summonNatureLevel = ko.observable(0);
            this.summonAnimalLevel = ko.observable(0);
            this.addedAnimalName = ko.observable("Squeaky");
        }
        //TODO: Move RollDice somewhere where both viewmodel and other classes can use it
        AnimalsViewModel.prototype.rollDice = function (numberOfDice, typeOfDice) {
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
        AnimalsViewModel.prototype.nextRound = function () {
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
        AnimalsViewModel.prototype.incrementDruidLevel = function () {
            this.druid().increaseLevel(1);
        };
        AnimalsViewModel.prototype.deleteAnimal = function (animalToDelete) {
            this.pets.remove(animalToDelete);
        };
        AnimalsViewModel.prototype.editDruidName = function () {
            this.editName(true);
        };
        AnimalsViewModel.prototype.editAnimalName = function (petToEdit) {
            petToEdit.editName(true);
        };
        AnimalsViewModel.prototype.selectSummonNaturesAlly = function (spellLevel) {
            this.summonNatureLevel(spellLevel);
        };
        AnimalsViewModel.prototype.selectSummonAnimalLevel = function (animalLevel) {
            this.summonAnimalLevel(animalLevel);
        };
        AnimalsViewModel.prototype.summonNaturesAlly = function () {
            var newAnimals;
            newAnimals = this.animalSummoner.summonNaturesAlly(this.druid().level(), this.summonNatureLevel(), this.summonAnimalLevel(), this.addedAnimalName());
            for (var _i = 0, newAnimals_1 = newAnimals; _i < newAnimals_1.length; _i++) {
                var animal = newAnimals_1[_i];
                this.pets.push(animal);
            }
            if (newAnimals.length > 0) {
                this.summonNatureLevel(0);
                this.summonAnimalLevel(0);
            }
        };
        return AnimalsViewModel;
    }());
    ko.applyBindings(new AnimalsViewModel(new druid_1.Druid("Courtney", 1)));
});
//# sourceMappingURL=viewmodel.js.map