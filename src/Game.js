import React, { useReducer } from "react";
import { Board } from "./Board";

const playerName = {
  1: "Pastafarian",
  2: "Ghost"
}

function squareReducer (squares, action){
  switch (action.type){
    case "RESTART": {
      return Array(9).fill(null)
    }
    case "SELECTSQUARE": {
      const squaresCopy = [...squares]
      squaresCopy[action.squareNumber] = calculateNextValue(squares);
      return squaresCopy;
    }
  }
}

function calculateStatus(winner, squares, nextValue) {
  
    if(winner){
      return `Winner: ${playerName[winner]}`
    } else if(squares.every(Boolean)){
      return `Tie`
    }
    return `Next player: ${playerName[nextValue]}`
  }
  
  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 1 : 2
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

export const Game = () => {

    const [squares, dispatch] = useReducer(squareReducer, Array(9).fill(null));

    const nextValue = calculateNextValue(squares);
    const winner = calculateWinner(squares);
    const status = calculateStatus(winner, squares, nextValue);

    return (
      <div className="game">
        <div className="game_content">
          <Board 
            winner = {winner}
            status = {status}
            squares = {squares}
            dispatch = {dispatch}
          />
        </div>
      </div>
    )
  }
  