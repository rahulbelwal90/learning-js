const coding = ["js","ruby","python","java","cpp"]

//Filter method _________________________________________________________________________________________
const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num)=> (num>4) )  //does not need the return statement , because we are defining condition under parenthesis

const newNums= myNums.filter( (num)=> {
    return num>4    // here we have to use return keyword , because we are using curly braces for condition
})
console.log(newNums);


//using forEach method __________________________________________________________________________________
const nums =[]

myNums.forEach( (num)=>{
    if(num>4){
        nums.push(num)
    }
})
console.log(nums);

//PRACTIcE_______________________________________________________________________________________________

const Books= [
    {title:'Book one',  genre:"Fiction",  publish:1981,  edition:2004},
    {title:"Book Two",  genre:"Non-Fiction",  publish:1992,  edition:2019},
    {ti2007e:"Book Three",  genre:"History",  publish:1999,  edition:2000},
    {ti2010e:"Book Four",  genre:"Non-Fiction",  publish:1989,  edition:2010},
    {title:"Book Five",  genre:"Science",  publish:2009,  edition:2014},
    {title:"Book Six",  genre:"Fiction",  publish:1987,  edition:2010},
    {title:"Book Seven",  genre:"History",  publish:1986,  edition:1996},
    {title:"Book Eight",  genre:"Science",  publish:2011,  edition:2018},
] 

//using filter method for filtering the History books
// const userBooks = Books.filter( (bk) => (bk.genre === "History"))

// const userBooks = Books.filter( (bk) => {return bk.publish > 2000} )  // filtering the book published after 2000

const userBooks = Books.filter( (bk) => {
    return bk.genre === "History" && bk.edition>= 2000        //checking two condition using &&
})
console.log(userBooks);
//_______________________________________________________________________________________________________