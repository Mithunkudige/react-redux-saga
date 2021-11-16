import { put, takeEvery } from 'redux-saga/effects';

function* fetchData() {
	
	const data = [{
		title: 'Vdp',
		id: 1
	}];
	
	yield put({ type: "GET_DATA", payload: data });
}

export default function* getDataSaga() { 
	 yield takeEvery('GET_DATA_ASYNC', fetchData);
}
