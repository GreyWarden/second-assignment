import React from 'react'

const CharComponent = ({char, onclick}) => (
    <span
        onClick={onclick}
        style={
            {
                display: 'inline-block',
                padding: '16px',
                textAlign:'center',
                margin:'16px',
                border: '1px solid black',
                cursor: 'pointer'
            }
        }
    >
      {char}
    </span>
)

export default CharComponent