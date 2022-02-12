'use strict';

const reset = document.querySelector('.again')

let secretNumber = Math.trunc(Math.random()*11)
console.log(secretNumber);
// const score = Number(document.querySelector('.score'))
let score = 20
let highscore = 0


const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}






document.querySelector('.check').addEventListener('click', function(){
    const guess = Number( document.querySelector('.guess').value);

    if(!guess){
    displayMessage('🙊🙅🏾‍♂️no number entered')
    } else if(guess === secretNumber){
    displayMessage('🎉🍾CORRECT NUMBER')
     document.querySelector('body').style.backgroundColor='green'
     document.querySelector('.number').textContent=secretNumber

    if(score>=highscore){
    highscore=score
    document.querySelector('.highscore').textContent=highscore
    }
    } else if(guess!==secretNumber){
        if (score>1){
           displayMessage( guess > secretNumber?'TOO HIGH 📈':'TOO LOW 📉');
                    score--;
                    document.querySelector('.score').textContent = score
        }else{
          displayMessage('YOU LOST 😜😜');
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor='red'
        }
    }
        
}) 

reset.addEventListener('click', function(){
score = 20
secretNumber = Math.trunc(Math.random()*11)
displayMessage('START GUESSSING')
document.querySelector('.score').textContent = score
document.querySelector('.number').textContent='?'
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#222'
})