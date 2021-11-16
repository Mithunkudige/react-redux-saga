import { all } from 'redux-saga/effects';
import counterIncSaga from './increment';
import counterDecSaga from './decrement';
import getDataSaga from './getData';

export default function* rootSaga() {
	yield all([
		counterIncSaga(),
		counterDecSaga(),
		getDataSaga()
	]);
}

