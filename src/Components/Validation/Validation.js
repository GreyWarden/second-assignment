import React from 'react'

const Validation = ({length}) => (
    <div>
      { length > 5 ? 'Text long enough' : 'Text too short' }
    </div>
)

export default Validation