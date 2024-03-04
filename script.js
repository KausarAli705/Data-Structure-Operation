'use strict';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({
    startIndex=1,
    mainIndex=0,
    time='20:00',
    address,
  }){
    console.log(`Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ... otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }


};


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'College Colony Parachinar',
//   mainIndex:2,
//   startIndex:2,
// });

// restaurant.orderDelivery({
//   address: "College Colony Parachinar"
// })
// const {name, openingHours,categories}  = restaurant;
// console.log(name, openingHours, categories);

// // variable names
// const { 
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags)

// // setting default values
// const {menu = [], starterMenu: starters=[]} = restaurant;
// console.log(menu, starters);

// // Mutating variables;
// let a = 11;
// let b = 999;
// const obj = {a:23, b:7, c:14};
// ({a,b} = obj);
// console.log(a,b);

// // nested objects
// const {
//   fri: {open: o, close:c}
// } = openingHours;
// console.log(o, c)

// console.log("hello world");

// const arr = [1,2,3]
// const [x , y , z] = arr;
// console.log(x,y,z)

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // const [main, secondary] = restaurant.categories;
// // console.log(main, secondary)

// // let [main, secondary] = [secondary, main];
// // console.log(main, secondary)

// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// const nested = [1,2,[3,4]];
// const [i,,j] = nested;
// console.log(i,j)

// ////////////////////////////////////////
// The spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1 , 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// // adding new item in array
// const newMenu = [...restaurant.mainMenu, " apple"]
// console.log(newMenu)

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

// // join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

// // calling pasta function
// const ingredients = [
//   // prompt("let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3')
// ];
// console.log(ingredients); 

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // or we can use spread operator
// restaurant.orderPasta(...ingredients);

// // ES2018 spread operator can work with objects
// const newRestaurant = {
//   ...restaurant, founded: 1998,
//   founder: 'Kausar'
// }
// console.log(newRestaurant);

// // shallow copy
// const restaurantCopy = [...restaurant];
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// spread because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // rest, because on left side of = 
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood]= [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
// /////////////////////////////////////
// 2) functions
// const add = function(...numbers){
//   let sum =0;
//   for (let i = 0; i<numbers.length; i++){
//     sum=sum+numbers[i]
//   }
//   console.log(sum)
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// // next level
// const x=[23, 5, 7];
// add(...x);

// // rest parameter
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms')

// coding challenge 1 ///


// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
// const players1=game.players[0];
// console.log(players1)

// const players2=game.players[1];
// console.log(players2)

// by destructure method
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final)

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds:{team1, x:draw, team2}} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function(...players){
  console.log(players);
  console.log(`${players.length} goals were scored`);

}

// printGoals( 'Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals( 'Davies', 'Muller');

printGoals(...game.scored)

// 7
team1 > team2 && console.log("team1 will win");
team1 < team2 && console.log("team2 will win");
*/

// =======================
// for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

// for (const item of menu) console.log(item);

// for (const item of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`);
// }

// optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// //  now with optional chaining
// console.log(restaurant.openingHours.mon?.open);

// // example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`)
// }

// // methods
// console.log(restaurant.order?.(0, 1)?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exit')

// arrays
// const users = [
//   {
//     name: 'Kausar',
//     email: 'kausarali705@gmail.com'
//   }
// ];
// console.log(users[0]?.name ?? 'User array empty')

// const users1 = {
//   u1:{
//     name: 'Danish',
//     class: '10th'
//   },
//   u2:{
//     name: 'Hassan',
//     class: '9th'
//   }
// }
// console.log(users1.u1?.grade ?? 'User array empty')
// console.log(users1[1]?.name ?? 'User array empty')

// for (const day of Object.keys(restaurant.openingHours)){
//   console.log(day);
// }
// const properties = Object.keys(restaurant.openingHours)
// console.log(properties);

// let openStr = `We are open on ${properties.length} days `;
// for (const day of properties){
//   openStr=openStr+`${ day }`
// }
// console.log(openStr)

// // property value
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries)
 
// // real game
// for (const [key, {open, close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// };

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // Entire object
// const entries = Object.entries(game.scored);
// console.log(entries)
/*
// 1
for (const [i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${player}`);
};
// 2
// const values = Object.values(restaurant.openingHours);
// console.log(values);
let average=0;
const values = Object.values(game.odds);
console.log(values)
for (let odd of values){
  average+=odd;
  
}
average /= Object.values(game.odds).length
console.log(average)
// 3
for (const [t, number] of Object.entries(game.odds)){
  const teamStr = t === 'x' ? 'draw' : `victory ${game[t]}`
  console.log(`Odd of ${teamStr}, ${number}`)
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/

// sets: collection of unique values
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza,', 'Pasta']);
console.log(ordersSet);

// string are also iterable
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('bread'))
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet );
// loppping
for (let i of ordersSet) console.log(i)
// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
// above staffUnique is a set but we want output in array so what we will do here, for this we will use spread operator
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2)
*/

// maps fundamentals
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 8).set('close', 17)
  .set(true, 'We are open :D')
  .set(false, 'We are closed:(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

console.log(rest)

const time =18;
console.log(rest.get(time> rest.get('open') && time < rest.get('close')));

// we can also use objects and array as key in map
rest.set([1,2], 'Test');
console.log(rest)
// console.log(rest.get([1,2])); // we got undefined
const arr = [3,4];
rest.set(arr, 'test2');
console.log(rest.get(arr));
*/

// lopping through map
const question = new Map([
  ['question', 'what is the best programming languangein the wrold?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again']
]);
// console.log(question);
// opening hours
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }
};
// now converting this object into map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// now loop in map
// difference between map and objects is object is not iterable and we use in loop condition "object.entries()
//======================================================
// Quiz app
/*
console.log(question.get('question'));
for (const [key, value] of question){
  if (typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`)
  }
}
// const answer = Number(prompt('Your answer'));
console.log(answer);
// method1 hard coding
// console.log(question.get('correct')===answer ? question.get(true):question.get(false));
// method2
console.log(question.get('correct')===answer); // this return true or false
console.log(question.get(question.get('correct')===answer));
*/

// =============================
// convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// console.log(question.keys());
// console.log(question.values());

// ===============================================
//////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
// 1 
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2
gameEvents.delete(64);

// 3 
const time = [...gameEvents.keys()].pop();
console.log(`An event happened on average, every ${time/ gameEvents.size} minutes`);

// 4
for (const [key, value] of gameEvents){
  console.log(key <= 45 ? `[first half] ${key} : ${value}`: `[2nd half] ${key} : ${value}`)
}
*/
// ==========================================
// string
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('B737'[0])

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('Portugal'));
// console.log(airline.lastIndexOf('portugal'));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(0, airline.lastIndexOf(' ')));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat =  function(seat){
//   const s = seat.slice(-1);
//   if (s==='B' || s ==='E' ||s==='b' || s==='e') {
//     console.log('You got the middle seat')
//   }

//   else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11b');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // string are primitive which mean single value can;t be changed so when apply method it become objects an

// const str = 'kAusaR';
// console.log(str)
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const lowerPart = str.slice(1).toLowerCase();
// console.log(lowerPart);
// const upperPart= str.slice(0,1).toUpperCase();
// console.log(upperPart);
// const correctWord=upperPart+lowerPart;
// console.log(correctWord)

// const email = 'Kausarali705@gmail.com ';
// // lower and trim it
// const normalizedEmail = email.toLowerCase().trim();
// console.log(normalizedEmail);

// // replacing
// const priceRS = '288,97$';
// const priceUS = priceRS.replace('RS', '$').replace(',','.');
// console.log(priceUS)

// const announcement = 'all passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// // booleans
// const plane2 = 'Airbus A32neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('AirB'));

// const checkBeaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are not allowed on board');
//   }
//   else {
//     console.log('Welcome Aboard');
//   }
// };

// checkBeaggage('Knife');
// checkBeaggage('gun')

// // more powerful string
// console.log('a+very+nice+string'.split('+'));
// console.log('Kausar Ali'.split(' '));

// const [firstname, lastName] = 'Kausar Ali'.split(' ');
// console.log(firstname, lastName)

// const newname = ['Mr.', firstname, lastName.toUpperCase()].join(' ');
// console.log(newname);

// example functins
/*
const capitalizeName = function(name){
  const names = name.split(' ');
  const nameUpper = [];
  // console.log(names)
  for(const n of names){
    console.log(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper);
  console.log(nameUpper.join(' '));

};

capitalizeName('kausar danish hassan jabir');
*/
// padding
// const message = 'Kausar';
// console.log(message.padEnd(12,'*'));
// const name = message.padStart(12, '=');
// console.log(name);

// //  real world example
// const maskCreditCard = function(number){
//   const str2 = number.slice(-4);
//   console.log(str2)
//   const str1 = number.slice(0,-4).length;
//   console.log()
//   const allText = str2.padStart(str1*2, '*');
//   console.log(allText)
// }

// maskCreditCard('03025919309')

// coding challenge 4

// more exerise
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  console.log(flights.split('+'));

 for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🤦‍♂️' : ''}${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} ${time.replace(':','h')}`.padStart(35);
  console.log(output);
}

// console.log(output);