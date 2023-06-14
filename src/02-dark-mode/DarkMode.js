import { useState } from 'react';

export default function DarkMode () {
  const [mode, setMode] = useState('light')

  function OnClick() {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <div className='page' id={mode}>
      <button className='dark-mode-button' onClick={OnClick}>Dark Mode</button>
      <button className='light-mode-button' onClick={OnClick}>Light Mode</button>
    </div>
  )
}
