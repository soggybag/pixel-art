export const SET_COLOR = 'SET_COLOR'
export const PICK_COLOR = 'PICK_COLOR'
export const FILL_COLOR = 'FILL_COLOR'

export const SET_NAME = 'SET_NAME'

export const setName = (name) => {
	return {
		type: SET_NAME,
		payload: { name }
	}
}

export const fillColor = (color) => {
	return {
		type: FILL_COLOR,
		payload: { color }
	}
}

export const setColor = (color, index) => {
	return {
		type: SET_COLOR,
		payload: { color, index }
	}
}

export const pickColor = (color) => {
	return {
		type: PICK_COLOR, 
		payload: { color }
	}
}