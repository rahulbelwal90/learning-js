// for loop _____________________________________________________________________________________________

for(let i = 0; i <10; i++){
    const element = i

    if(element == 5){
        console.log("5 is the best number!!!");
    }
    console.log(element);
}

for(let i=0; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    console.log(`Table of: ${i}`);
    

 //creating tables using for loop

    for (let j  = 0;  j<=10 ; j++) {
            //   console.log(`Inner loop i value :${i} and Inner loop j value:${j}`);
            console.log(i + ' * ' + j + ' = ' + i*j);       
    }
}


// iterating the element of the array

let myArray = ['batman', 'superman', 'spiderman']
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(element);   
}


// BREAK and CONTINUE ___________________________________________________________________________________

//break.....................................................

for(let index = 1; index<=20; index++){

    if(index == 5){
        console.log(`Detected five`);
        break    // after matching the condition , break condition will break out the whole loop
    }
    console.log(`Value of index is : ${index}`);
}

//continue ................................................

for(let index = 1; index<=20; index++){

    if(index == 5){
        console.log(`Detected five`);
       continue   // continue allow you to skip the condition for one time!!!
    }
    console.log(`Value of index is : ${index}`);
}

//_______________________________________________________________________________________________________