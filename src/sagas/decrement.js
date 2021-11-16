import { put, takeEvery } from 'redux-saga/effects';

function* fetchDecrement() {
	yield put({ type: "DECREMENT" });
}

export default function* counterDecSaga() { 
	 yield takeEvery('DECREMENT_ASYNC', fetchDecrement);
}