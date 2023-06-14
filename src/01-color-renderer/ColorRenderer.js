import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

function ColorRenderer () {
  return (
    <>
      {/* my attempt */}
      {/* <Color hex={colors[0].hex} name={colors[0].name} />
      <Color hex={colors[1].hex} name={colors[1].name} />
      <Color hex={colors[2].hex} name={colors[2].name} />
      <Color hex={colors[3].hex} name={colors[3].name} /> */}

      {/*Cleaner Solution*/}
      {colors.map(color => <Color key={color.hex} hex={color.hex} name={color.name} />)}
    </>
  )
}

export default ColorRenderer;