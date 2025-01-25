/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Popup from './components/Popup';
import { useWordleGame } from './hooks/useWordleGame';


function App() {

  const {
    solution,
    hint,
    gusses,
    currentRow,
    message,
    gameOver,
    handleKeyPress,
    resetGame
  } = useWordleGame();

  const handleKeyDown = useCallback((event) => {
    const key = event.key.toLowerCase();
    handleKeyPress(key);
  }, [handleKeyPress])
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown])

  
  
  return (
    <div className="App">
      <div className='game-area'>
        <Header />
        <Board gusses={gusses} solution={solution} currentRow={currentRow} />
        <div className='hint'>
          <strong>Hint: {hint}</strong>
        </div>
       
      </div>
        <Keyboard onKeyPress={handleKeyPress} />
        {gameOver && (<Popup message={message} onReplay={resetGame} />)}
    </div>
  );
}

export default App;
