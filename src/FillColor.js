import { useSelector, useDispatch } from 'react-redux'
import { fillColor } from './actions'

function FillColor() {
	const { color } = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<button
			onClick={() => dispatch(fillColor(color))}
		>Fill Color</button>
	)
}

export default FillColor