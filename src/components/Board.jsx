import Row from './Row.jsx'
const Board = ({gusses, solution, currentRow}) => {

    return (
        <div className="board">
            {gusses.map((guess, rowIndex) => {
                return <Row 
                    key={rowIndex} 
                    guess={guess} 
                    solution={solution} 
                    isCurrentRow = {currentRow === rowIndex}
                />
            })}
        </div>
    )
}

export default Board;