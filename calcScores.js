
module.exports = function (code, guess) {
    console.log(code, guess)
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




