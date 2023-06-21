import React, { useState } from 'react'

function ColorPicker ({ setCurrentColor }) {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => setCurrentColor(color)} />)}
    </div>
  )
}

function Pixel ({ currentColor }) {
  const [pixelColor, setPixelColor] = useState('lightGrey');

  const pixelStyle = {
    height: '20px',
    width: '20px',
    backgroundColor: pixelColor,
    margin: '1px'
  };
  
  return <div style={pixelStyle} onClick={() => setPixelColor(currentColor)} ></div>
}

function Pixels ({ currentColor }) {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} currentColor={currentColor}/>)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [currentColor, setCurrentColor] = useState('lightGrey');
  return (
    <div>
      <ColorPicker setCurrentColor={setCurrentColor}/>
      <Pixels currentColor={currentColor}/>
    </div>
  )
}
