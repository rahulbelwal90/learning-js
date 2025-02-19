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