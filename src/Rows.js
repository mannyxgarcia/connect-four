import React from 'react'
import Cell from './Cells'

const Rows = ({row, handleMove}) => {
  return (
    <>
      <tr>
        {row && row.map((cell, index) => {
          return <Cell cell={cell} id={index} key={index} handleMove={handleMove} />
        })}
      </tr>
    </>
  )
}

export default Rows
