import { combineReducers } from 'redux'
import gridReducer from './gridReducer'
import colorReducer from './colorReducer'
import pictureReducer from './pictureRedcuer'

const rootReducer = combineReducers({
	grid: gridReducer,
	color: colorReducer,
	name: pictureReducer
})

export default rootReducer