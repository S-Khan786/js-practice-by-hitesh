// Array


// const myArr = [0, 1, 2, 3, 4, 5];

// const myHeros = ["shaktiman", "krish"];

// // console.log(myHeros[1]);
// // console.log(myHeros.length);


// // Array Methods

// // myArr.push(6);
// // console.log(myArr);

// // myArr.unshift(9);
// // console.log(myArr);

// // myArr.shift();
// // console.log(myArr);



// // Slice, Splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3); // slice(start, end) end is exclusive it returns new array without chaning the original array
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3); // splice(start, deleteCount) it changing the original array return me [1, 2, 3] 
// console.log("C ", myArr); // return [0, 4, 5]
// console.log(myn2);











const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];


// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]; // Spread Operator
console.log(allNewHeros);



console.log(Array.isArray("Sahil")); // false
console.log(Array.from("Sahil")); // [ 'S', 'a', 'h', 'i', 'l' ]
console.log(Array.from({name: "sahil"})); // [] -> Interesting case



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

// Read more about isArray, from, of





