import React, { useState } from 'react'

function RadioButtonTask () {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = event => {
    setSelectedOption(event.target.value)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Radio Button Task</h2>

      <label>
        <input
          type='radio'
          name='response'
          value='yes'
          checked={selectedOption === 'yes'}
          onChange={handleChange}
        />
        Yes
      </label>
      <label style={{ marginLeft: '20px' }}>
        <input
          type='radio'
          name='response'
          value='No'
          checked={selectedOption === 'No'}
          onChange={handleChange}
        />
        No
      </label>

      <div style={{ fontWeight: 'bold' }}>
        {selectedOption === 'yes' && <p>Ushbu amalga rozisz</p>}
        {selectedOption === 'No' && <p>Siz bunga qarshisz</p>}
      </div>
    </div>
  )
}
export default RadioButtonTask
