import React from "react";

export const Board = (props) => {
  const { winner, nextValue, status, squares, setSquares } = props;

  function selectSquare(square) {
    if (winner || squares[square]) {return}
      const squaresCopy = [...squares]
      squaresCopy[square] = nextValue
      setSquares(squaresCopy)
  }

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="game_board">
        <div className="board_row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board_row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board_row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </>
  )
}
