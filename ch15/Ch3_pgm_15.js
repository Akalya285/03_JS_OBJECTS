// A player object

var player;

player = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: "a rusty key, The Sword of Destiny, a piece of cheese"
};

console.log(player.name);
console.log(player.name + " is in " + player.place);
console.log(player.name + " has health " + player.health);
console.log("Items: " + player.items);

// 1) Create a second player
var player2 = {
    name: "Grom",
    health: 75,
    place: "The Forbidden Forest",
    items: "a magic amulet, potions of healing"
};

// 2) Log their details to the console
console.log("\nSecond Player:");
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items);
