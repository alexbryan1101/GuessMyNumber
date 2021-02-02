'use strict'

const secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.currentScore').textContent = score

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)

    console.log(guess);

    if(score > 0){
        if(!guess){
            alert('Please add a number!')
        } else if (guess > 20 || guess < 1){
            alert('Number is out of bounds!')
            updateScore()
        } else if (guess > secretNumber){
            setHint('Your guess is too high')
            updateScore()
        } else if (guess < secretNumber){
            setHint('Your guess is too low')
            updateScore()
        } else if (guess === secretNumber){
            setHint('Boom! Great Guess!')
        }
    } else {
        setHint('You Lose!')
    }
})

var setHint = function(text) {
    document.querySelector('.hint').textContent = text
}

var updateScore = function() {
    score--
    document.querySelector('.currentScore').textContent = score
}








