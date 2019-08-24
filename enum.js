var animals;
(function (animals) {
    animals[animals["cat"] = 0] = "cat";
    animals[animals["lion"] = 1] = "lion";
    animals[animals["dog"] = 2] = "dog";
    animals[animals["cow"] = 3] = "cow";
    animals[animals["monkey"] = 4] = "monkey";
})(animals || (animals = {}));
var c = animals.cat;
console.log(animals[3]);
console.log(animals.monkey);
console.log(c);
