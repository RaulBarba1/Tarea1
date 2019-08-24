interface Enemy{
    readonly size: number,
    health: number,
    range: number,
    readonly damage: number
}

    let tank: Enemy ={
    size: 50,
    health: 100,
    range: 60,
    damage: 12
    }

    tank.health=95;
   //tank.damage=10;

    interface EnemyHit {   
    (name: Enemy, damageDone: number): number;
 }
 
    let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number) {
    tankName.health -= damageDone;  
    return tankName.health;
 }

   console.log(tank.damage, tank.health);
   
