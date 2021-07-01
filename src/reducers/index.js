import { combineReducers } from 'redux'
import gridReducer from './gridReducer'
import colorReducer from './colorReducer'

const rootReducer = combineReducers({
	grid: gridReducer,
	color: colorReducer
})

export default rootReducer