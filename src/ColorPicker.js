import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pickColor } from './actions'

function ColorPicker() {
	const [color, setColor] = useState('#f00')
	const dispatch = useDispatch()

	return (
		<div>
			<div style={{
				width: '40px',
				height: '40px',
				backgroundColor: color
			}}></div>
			<input 
				type="color"
				value={color}
				onChange={e => { 
					setColor( e.target.value )
					dispatch(pickColor( e.target.value ))
				}}
			/>
		</div>
	)
}

export default ColorPicker