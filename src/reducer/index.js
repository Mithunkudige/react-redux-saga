import counterReducer from './counter';
import getDataReducer from './getData';
import {combineReducers } from 'redux';

const rootReducer = combineReducers({
	counter: counterReducer,
	data: getDataReducer
});

export default rootReducer;