import React, { useState } from 'react';

const Puzzle = ({puzzle}) => {
    const [guess, setGuess] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [showHintOne, setHintOne] = useState(false);
    const [showHintTwo, setHintTwo] = useState(false);
    const [showTryAgain, setTryAgain] = useState(false);


    const handleGuessChange = (event) => {
        setGuess(event.target.value);
    };

    const checkAnswer = () => {
        if (guess === puzzle.answer) {
            setShowAnswer(true);
            setTryAgain(false);
        } else {
            setShowAnswer(false);
            setTryAgain(true);
        }
    };

    const confirmHintOne = () => {
        if(window.confirm('Are you sure you want to see a hint?')) {
            setHintOne(true);
        }
    };

    const confirmHintTwo = () => {
        setHintTwo(true);
    };

    return(
        <div className="container">
            <h2>{puzzle.title}</h2>
            {puzzle.supplementaryItems && (
                <div 
                    className="optional-content"
                    dangerouslySetInnerHTML={{ __html: puzzle.supplementaryItems }}
                ></div>
            )}
            <p>{puzzle.puzzleText}</p>
            <input 
                type="text" 
                value={guess} 
                onChange={handleGuessChange} 
                placeholder="Check your answer" 
                maxLength="4"
            />
            <button onClick={checkAnswer}>Submit</button>
            <button onClick={confirmHintOne}>Hint 1</button>
            {showAnswer && (
               <div className="answer">
                    <h4>{guess} is correct!</h4>
                    <p>{puzzle.resetText}</p>
                </div> 
            )}
            {showHintOne && (
                <div className="alert alert-info">
                <h4>Hint One:</h4>
                <p>{puzzle.hintOne}</p>
                {!showHintTwo && (
                    <button onClick={confirmHintTwo}>I'm REALLY stuck</button>
                )}
                {showHintTwo && (
                    <div className="alert alert-info mt-2">
                    <h4>Hint Two:</h4>
                    <p>{puzzle.hintTwo}</p>
                    </div>
                )}
                </div>
            )}
            {showTryAgain && (
                <div className="tryAgain">
                    <p>Sorry, {guess} is incorrect.Try again!</p>
                </div>
            )}
        </div>
    )
}


export default Puzzle;