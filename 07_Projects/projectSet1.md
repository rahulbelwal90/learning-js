# Project Solution code

## Project 1 : Color-Changer

```javascript

const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button);

  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)  // event.target determine where event come from.

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})

```




## Project 2: BMI-Calculator

```javascript
const form = document.querySelector('form')

//This use case will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = (document.querySelector('#results'))

  if(height === '' || height <= 0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
  }

  else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${height}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    // show the result
    if(bmi < 18.6){
      results.innerHTML = `<span>BMI: ${bmi}  Underweight</span>`;
    }
    else if(bmi >= 18.6 || bmi <= 24.9){
      results.innerHTML = `<span>BMI: ${bmi} Normal Range</span>`;
    }else{
      results.innerHTML = `<span>BMI: ${bmi} Overweight</span>`;
    }
  }

})

```


## Project 3: Digital Clock

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date= new Date();
  clock.innerHTML = date.toLocaleTimeString();
} , 1000);

```

## Project 4 : Guess the Number

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1){
    alert('Please enter a number more than 1')
  }else if (guess > 100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`OH YEAH :You guessed it RIGHT`)
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Number is TOO low !`)
  }else if(guess > randomNumber){
    displayMessage(`Number is TOO high !`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML= '';
    remaining.innerHTML= `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame=true;
  })
}

```

## Project 5 : KeyBoard Check
``` javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space': e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table  
    </div>
    `;
});

```

## Project 6 : Unlimited Color
``` javascript

// generate a random color....

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(randomColor());

let intervalId ;

const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(ChangeBgColor,1000);
  }

  function ChangeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);

```