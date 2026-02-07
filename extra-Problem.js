function finalScore(obj) {
    
    const questions = obj.correct + obj.incorrect + obj.blank;

    if (questions !== 80 || typeof questions !== 'number') {
        return 'invalid';
    }

    const correctMark = obj.correct * 1.25 ;
    const incorrectMark = obj.incorrect * 0.75 ;
    const skipMark = obj.blank * 0 ;

    const finalScore = (correctMark - incorrectMark ) ;
    return Math.round(finalScore) ;

    
}

const obj= { correct: 50, incorrect: 20, blank: 10 }

const score = finalScore(obj);
console.log(score);
