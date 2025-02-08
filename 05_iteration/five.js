const coding = ["js","ruby", "python"]

// for-each method_______________________________________________________________________________________

coding.forEach(function(value){
    console.log(value);
})

//using arrow function___________________________________________________________________________________

coding.forEach( (value) => {
    console.log(value);
})

// by using refrence of function_________________________________________________________________________

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)         // give the refrence , do not execute the function like => printMe() !!!!


// Some extra parameter of forEach() method _____________________________________________________________

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


//iteration on object in array___________________________________________________________________________

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
    
]

myCoding.forEach( (item)=>{
    console.log(`${item.languageName} => ${item.languageFileName}`);
})

//_______________________________________________________________________________________________________