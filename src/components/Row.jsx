import Tile from './Tile.jsx';
import { evaluateGuess } from '../utils/wordHelpers.js'
const Row = ({ guess, solution, isCurrentRow }) => {
    const evaluation = evaluateGuess(guess, solution);
    return (
        <div className={`row ${isCurrentRow ? 'current' : ''}`}>
            {
                Array.from({ length: 5 }).map((_, index) => {
                    return <Tile key={index} letter={guess[index]} status={evaluation[index]} />
                })
            }
        </div>
    )
}


export default Row;