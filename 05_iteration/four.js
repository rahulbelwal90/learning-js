const myObj = {
    cpp: "C++",
    js: "javascript",
    rb: "ruby",
    py: "python"
}

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//.....................................................................

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR',"France")

// for(const key in map){      // loop will not execute on the map function, beacause it is not iterable
//     console.log(key);
// }