import React, { useState } from 'react';
import { 
    Button, 
    Card, 
    CardContent, 
    CardHeader,
    Container, 
    TextField
} from '@mui/material';


const Puzzle = ({puzzle}) => {
    const [guess, setGuess] = useState('');
    const [submittedGuess, setSubmittedGuess] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [showHintOne, setHintOne] = useState(false);
    const [showHintTwo, setHintTwo] = useState(false);
    const [showTryAgain, setTryAgain] = useState(false);


    const handleGuessChange = (event) => {
        setGuess(event.target.value);
    };

    const checkAnswer = () => {
        setSubmittedGuess(guess);
        if (guess === puzzle.answer.toString()) {
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

    const hideHints = () => {
        setHintOne(false);
        setHintTwo(false);
    }

    return(
        <Container>
            <h2>{puzzle.title}</h2>
            {puzzle.supplementaryItems && (
                <div 
                    className="optional-content"
                    dangerouslySetInnerHTML={{ __html: puzzle.supplementaryItems }}
                ></div>
            )}
            <p>{puzzle.puzzleText}</p>
            <TextField 
                id="standard-basic" 
                value={guess} 
                label="Check your answer" 
                variant="standard"
                placeholder="Check your answer" 
                maxLength="4"
                onChange={handleGuessChange}
            />
            <br/>
            <Button variant="text" onClick={checkAnswer}>Submit</Button>
            <Button variant="text" onClick={confirmHintOne}>Give me a hint</Button>
            {showAnswer && (
               <div className="answer">
                    <h4>{submittedGuess} is correct!</h4>
                    <p>{puzzle.resetText}</p>
                </div> 
            )}

            {showTryAgain && (
                <div className="tryAgain">
                    <p>Sorry, {submittedGuess} is incorrect.Try again!</p>
                </div>
            )}

            {showHintOne && (
                <Card>
                <CardHeader>Hint One:</CardHeader>
                <CardContent>{puzzle.hintOne}</CardContent>
                {!showHintTwo && (
                    <Button variant="text" onClick={confirmHintTwo}>I'm really stuck</Button>
                //     <button onClick={confirmHintTwo}>I'm REALLY stuck</button>
                )}
                {showHintTwo && (
                    <Card>
                    <CardHeader>Hint Two:</CardHeader>
                    <CardContent>{puzzle.hintTwo}</CardContent>
                    </Card>
                )}
                    <Button variant="text" onClick={hideHints}>Hide Hints</Button>
                </Card>
            )}
        </Container>
    )
}


export default Puzzle;