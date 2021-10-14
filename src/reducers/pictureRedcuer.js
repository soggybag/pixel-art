import { SET_NAME } from '../actions'

const pictureReducer = (state = 'hello', action) => {
	switch(action.type) {
		case SET_NAME: 
			return action.payload.name
		default: 
			return state
	}
}

export default pictureReducer