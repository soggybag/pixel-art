import { SET_COLOR, FILL_COLOR } from '../actions'

const defaultGrid = () => {
	const arr = []
	for (let i = 0; i < 64; i += 1) {
		arr.push('#ccc')
	}
	return arr
}

const gridReducer = (state = defaultGrid(), action) => {
	switch(action.type) {
		case SET_COLOR:
			return state.map((color, i) => {
				if (action.payload.index === i) {
					return action.payload.color
				}
				return color
			})

		case FILL_COLOR: 
			return state.map(() => action.payload.color)

		default:
			return state
	}
}

export default gridReducer