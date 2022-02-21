import React from "react";
import { FaPastafarianism} from "react-icons/fa";
import { FaGhost } from "react-icons/fa";

const playerIcon = {
  1: <FaPastafarianism className="pastafarianism"/>,
  2: <FaGhost className="ghost"/>
}

export const Board = (props) => {
  const { winner, status, squares, dispatch } = props;

  function selectSquare(squareNumber) {
    if (winner || squares[squareNumber]) {
      return
    }
    dispatch({
      type: "SELECTSQUARE", squareNumber    
     })
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        { playerIcon[squares[i]] }
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
      <button className="restart" onClick={() => dispatch({type: "RESTART"})}>
        restart
      </button>
    </>
  )
}
