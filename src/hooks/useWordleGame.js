import { useState } from "react";
import { Words } from '../data/wordList'

export const useWordleGame = () => {
    const [wordObject, setWordObject] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    )
    const [gusses, setGusses] = useState(["", "", "", "", "", "", ""]);

    const [solution, setSolution] = useState(wordObject.Word);

    const [hint, setHint] = useState(wordObject.hint);

    const [currentRow, setCurrentRow] = useState(0);

    const [gameOver, setGameOver] = useState(false);

    const [message, setMessage] = useState('');


    const handleKeyPress = (key) => {
        if (gameOver) return;

        const normalizedKey = key.toLowerCase();

        if (normalizedKey === 'enter') {
            if (gusses[currentRow].length !== 5) {
                return;
            }

            if (gusses[currentRow] === solution) {
                setMessage("You gussed it! 🎉🎉");
                setGameOver(true);
                return;
            }

            if (currentRow === 5) {
                setMessage(`Game Over! The word was ${solution.toUpperCase()}.`);
                setGameOver(true);
                return;
            }

            setCurrentRow((prev) => prev + 1);
            setMessage("");
            return;
        }

        if (normalizedKey === 'backspace') {
            setGusses((prevGuesses) => {
                const newGuesses = [...prevGuesses];
                newGuesses[currentRow] = newGuesses[currentRow].slice(0, -1);
                return newGuesses;
            });
            return;
        }

        if (/^[a-z]$/.test(normalizedKey)) {
            setGusses((prevGuesses) => {
                const newGuesses = [...prevGuesses];
                if (newGuesses[currentRow].length < 5) {
                    newGuesses[currentRow] += normalizedKey;
                }
                return newGuesses;
            });
        }

    }

    const resetGame = () => {
        const newWordObject = Words[Math.floor(Math.random() * Words.length)];
        setWordObject(newWordObject);
        setSolution(newWordObject.Word);
        setHint(newWordObject.hint);
        setGusses(["", "", "", "", "", ""]);
        setCurrentRow(0);
        setMessage("");
        setGameOver(false);
    }

    return {
        handleKeyPress,
        resetGame,
        message,
        gameOver,
        currentRow,
        hint,
        solution,
        gusses,
        wordObject
    }
}