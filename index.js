const readlineSync = require('readline-sync');
// const score = require ('./calcScores')

const getRandomPin = (chars, len) => [...Array(len)].map(
    (i) => chars[Math.floor(Math.random() * chars.length)]
).join('');


function calcScore(code, guess) {

    // console.log( "calcScore ..."+  code, guess)
    let obj = {
        'correctPos': 0,
        'inCorrectPos': 0
    }
    if (code.some(el => el > 5 || el < 0)) {
        return "Invalid code!"
    }
    for (let i = 0; i < guess.length; i++) {

        for (let j = 0; j < code.length; j++) {

            if (guess[i] === code[j]) {
                if (i === j) {
                    obj['correctPos']++;
                }
                else {
                    obj['inCorrectPos']++;
                }
                //  guess[i] = '*';
                //  code[j] = '*';
                break;
            }
        }
    }

    // console.log(guess )
    return obj;
}


function mastermind() {
    let code = getRandomPin('12345', 4);
    var codeArray = [...code];
    let count = 1
    let win = false
    while (count < 11) {
        let guess = readlineSync.question(count + ") Guess the 4-digit code: Enter 4-digit code in the range 1-5 or quit to exit")
        if (guess === 'quit') break;
        if (guess === codeArray.join('')) {
            win = true
            break;
        }
        let score = calcScore(codeArray, guess)
        console.log(score)
        count++
    }

    if (win) {
        console.log("Correct - You win!")
    }
    else {
        console.log("You lose. Code was " + codeArray.join(''))
    }
}

mastermind()



