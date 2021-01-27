export function checkBoard(board){
  let result = checkVertical(board) || checkHorizontal(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkTie(board)
  return result
}

function checkVertical(board){
  for(let r = 3; r <= 5; r++){
    for(let c = 0; c <= 6; c++){
      if(board[r][c]){
        if(board[r][c] === board[r - 1][c] &&
           board[r][c] === board[r - 2][c] &&
           board[r][c] === board[r - 3][c]) {
          return board[r][c] 
        }
      }
    }
  }
}

function checkHorizontal(board){
  for(let r = 0; r <= 5; r++){
    for(let c = 0; c <= 3; c++){
      if(board[r][c]){
        if(board[r][c] === board[r][c + 1] && 
           board[r][c] === board[r][c + 2] && 
           board[r][c] === board[r][c + 3]) {
          return board[r][c]
        }
      }
    }
  }
}

function checkDiagonalRight(board){
  for(let r = 3; r <= 5; r++) {
    for(let c = 0; c <= 3; c++){
      if(board[r][c]) {
        if(board[r][c] === board[r - 1][c + 1] &&
           board[r][c] === board[r - 2][c + 2] &&
           board[r][c] === board[r - 3][c + 3]) {
          return board[r][c]     
        }
      }
    }
  }
}

function checkDiagonalLeft(board) {
  for(let r = 3; r <= 5; r++){
    for(let c = 3; c <= 6; c++) {
      if(board[r][c]){
        if(board[r][c] === board[r - 1][c - 1] &&
           board[r][c] === board[r - 2][c - 2] && 
           board[r][c] === board[r - 3][c - 3]) {
          return board[r][c] 
        }
      }
    }
  }
}

function checkTie(board){
  for(let r = 0; r <= 5; r++){
    for(let c = 0; c <= 6; c++){
      if(board[r][c] === null) {
        return null
      }
    }
  }
  return 'tie'
}




