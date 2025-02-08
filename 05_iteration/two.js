// while loop ___________________________________________________________________________________________

let index = 0
while(index <= 10){
    console.log(`Value of Index: ${index}`);
    index = index + 2
}

let myArray = ['batman', 'superman', 'flash']
let arr = 0
while(arr < myArray.length){
    console.log(`Value is : ${myArray[arr]}`);
    arr = arr +1
}


// do-while loop ________________________________________________________________________________________
// do while loop first execute the statement then it will check the condition!!!!

let score =11
do{
    console.log(`Value of Score : ${score}`);
    score++
}while(score < 10);