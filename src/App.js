import './App.css';
import React, { useState, useEffect } from 'react'
import Rows from './Rows'
import { checkBoard } from './utils'

function App() {
  
  const [board, setBoard] = useState([])
  const [currentMove, setCurrentMove] = useState('')
  const [winner, setWinner] = useState('')
  
  useEffect(() => createBoard(), [])
  
  const createBoard = () => {
    let newBoard = []
    
    for(let row = 0; row < 6; row++){
      let rows = []
      for(let column = 0; column < 7; column++){
        rows.push(null)
      }
      newBoard.push(rows)
    }
    setBoard(newBoard)
    setCurrentMove('player1')
    setWinner('')
  }
  
  const handleMove = (column) => {
    // start at bottom row and work up
    for(let row = 5; row >= 0; row--) {
      if(!board[row][column]) {
        board[row][column] = currentMove
        break
      }
    }
    let result = checkBoard(board)
    
    if(result === 'player1'){
      setWinner('Red Player Wins!')
    } else if (result === 'player2'){
      setWinner('Yellow Player Wins!')
    } else if(result === 'tie') {
      setWinner('Tie Game')
    } else {
      changePlayer(currentMove)
    }
  }
  
  const changePlayer = (currentMove) => {
    currentMove === 'player1' ? setCurrentMove('player2') : setCurrentMove('player1')
  }
  
  return (
    <>
    <div className="container">
        <table>
          <tbody>
            {board.map((row, index) => <Rows key={index} row={row} handleMove={handleMove}/>)}
          </tbody>
        </table>
        {winner ? <div className="winner-message">{winner}</div> : null}
        <div className="bottom-container">
          <button className="btn" onClick={() => createBoard()}>New Game</button>
        </div>
    </div>
    </>
  );
}

export default App;
