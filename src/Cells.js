import React from 'react'

const Cells = ({cell, id, handleMove}) => {
  let circleColor;
  
  if(cell === 'player1'){
    circleColor = 'red'
  } else if(cell === 'player2'){
    circleColor = 'yellow'
  } else {
    circleColor = 'white'
  }
  
  return (
    <>
      <td>
        <div className="cell" key={id} onClick={() => handleMove(id)}>
          <div className={circleColor} />
        </div>
      </td>
    </>
  )
}

export default Cells
