var tank = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
};
tank.health = 95;
var tankHit = function (tankName, damageDone) {
    tankName.health -= damageDone;
    return tankName.health;
};
console.log(tank.damage, tank.health);
console.log(tankHit);
