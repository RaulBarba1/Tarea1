var animals;
(function (animals) {
    animals[animals["cat"] = 1] = "cat";
    animals[animals["lion"] = 2] = "lion";
    animals[animals["dog"] = 11] = "dog";
    animals[animals["cow"] = 12] = "cow";
    animals[animals["monkey"] = 13] = "monkey";
})(animals || (animals = {}));
var c = animals.cat;
console.log(animals[3]);
console.log(animals.monkey);
console.log(c);
