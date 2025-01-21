const marvel_heroes = ["Iron Man","Hulk","Thor"]
const dc_heroes = ["Superman", "Batman", "Hulk"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);    //Output: [ 'Iron Man', 'Hulk', 'Thor', [ 'Superman', 'Batman', 'Hulk' ] ]
// console.log(marvel_heroes[3])  //Output: [ 'Superman', 'Batman', 'Hulk' ]
// console.log(marvel_heroes[3][0]);  //Output: Superman


//concat: Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);  //output : [ 'Iron Man', 'Hulk', 'Thor', 'Superman', 'Batman', 'Hulk' ]


// spread operator => ...
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);
console.log(typeof all_new_heroes);

// using flat = Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1,2,3,[4,5],5,[6,7,[8]]]
const reusable_array = another_array.flat(Infinity)
console.log(reusable_array);


console.log(Array.isArray("Rahul"));    // return false
console.log(Array.from("Rahul"));  // Creates an array from an iterable object. output: [ 'R', 'a', 'h', 'u', 'l' ]
console.log(Array.from({name: "Rahul"}));  //intresting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));    //output: [ 100, 200, 300 ]







