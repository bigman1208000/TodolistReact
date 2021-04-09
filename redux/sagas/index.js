import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

//config
import env from '../../config/environment';

function* getTasks() {
  try {
    yield put({ type: 'REQUEST_GET_TASKS' });
    const tasks = yield call(() => {
      return axios.get(env.BASE_URL + '/get');
    });
    yield put({ type: 'REQUEST_GET_TASKS_SUCCESS', tasks: tasks.data.tasks });
  } catch (error) {
    yield put({ type: 'REQUEST_GET_TASKS_FAILED' });
  }
}

//watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks);
}

export default mySaga;
