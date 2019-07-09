const ZERO = 0;
const PRIZE_INCREASE = 2;
const RANDOM_INCREASE = 4;

let randomNum = 2;
let userNum;
let maxAttempts = 3;
let prize = 100;
let minRange = 0;
let maxRange = 8;
let prizeTotal = 0;
let continueGame;
let guess;

let playGame = confirm('Do you want to play a game?');
if (!playGame) {
 alert('You did not become a billionaire, but can.');
} else {
 do {
    let attempt = maxAttempts;
    let randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    alert(randomNumber);
        
         do {
                guess = prompt(`Choose a roulette pocket from ${minRange} 
                to ${maxRange}` +
                                '\nAttempts left: ' +${attempt} +
                                '\nTotal prize: ' + ${prizeTotal} +
                                '\nPossible prize on the current attempt: ' + ${prize}, '');
            
            } while (isNaN(guess) || guess === '' || guess === null 
                || guess > maxRange || guess < minRange);
        if (guess === randomNum) {
         prizeTotal = prizeTotal + prize;
            continueGame = confirm(`Congratulation, you won! Your prize is: ${prizeTotal}$. 
                Do you want to continue?`);
            if (continueGame) {
             attempt = maxAttempts;
          maxRange = maxRange + RANDOM_INCREASE;
             prize = prize * PRIZE_INCREASE;

            } else {
             prizeTotal = ZERO;
            }
        } else { 
         do{
         attempt--;
            prize = prize / PRIZE_INCREASE;
            confirm('Thank you for your participation. Your prize is: ' +
            ${prizeTotal}$.  + '\nDo you want to play again?');
            if (continueGame) {
             prizeTotal = prizeTotal + prize;
             attempt = maxAttempts;
            }
        } while (attempt > ZERO);
}  
        if (attempt === ZERO) {
         confirm('Thank you for your participation. Your prize is: ' +
            ${prizeTotal}$.  + '\nDo you want to play again?');
            prizeTotal = prize;
        } else {
         continueGame = false;
        }
  } while (continueGame);
 }