import { useSelector, useDispatch } from 'react-redux'
import { setColor } from './actions'

import './Grid.css'

function Grid() {
	const arr = useSelector(state => state.grid)
	const selectedColor = useSelector(state => state.color)
	const dispatch = useDispatch()

	return (
		<div className="Grid">
			{arr.map((color, i) => <div 
				style={{ backgroundColor: color }} 
				onClick={() => dispatch(setColor(selectedColor, i))}
			/>)}
		</div>
	)
}

export default Grid