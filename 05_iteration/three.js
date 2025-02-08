const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(`Value in array: ${num}`);
}

const greeting = "Hello World"
for(const greet of greeting){
    console.log(`Each char is : ${greet}`);
}

//map____________________________________________________________________________________________________
// => map is a object holds key value pair remember the original insertion order of the keys.

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR',"France")

//..............................................
console.log(map);

//..............................................
for(const key of map){
    console.log(key);
}

//..............................................
for(const [key,value] of map){
    console.log(key, ':-', value);
}
