
import { useDispatch, useSelector } from 'react-redux'

import Grid from './Grid'
import ColorPicker from './ColorPicker'
import FillColor from './FillColor'

import { setName } from './actions'

import './App.css';

const pictures = {
  AOC: 'picture AOC', // require('./...')
  MTG: 'picture MTG',
  CRUZ: 'picture CRUZ',
}

function App() {
  const name = useSelector(state => state.name)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{pictures[name]}</h1>
      {/* <img src={pictures[name]} /> */}
      <Grid />
      <ColorPicker />
      <FillColor />
      <button onClick={() => dispatch(setName('AOC'))}>AOC</button>
      <button onClick={() => dispatch(setName('MTG'))}>MTG</button>
      <button onClick={() => dispatch(setName('CRUZ'))}>CRUZ</button>
    </div>
  );
}

export default App;
