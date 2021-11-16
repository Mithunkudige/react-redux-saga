import { put, takeEvery } from 'redux-saga/effects';

function* fetchIncrement() {
	yield put({ type: "INCREMENT" });
}

export default function* counterIncSaga() { 
	 yield takeEvery('INCREMENT_ASYNC', fetchIncrement);
}
