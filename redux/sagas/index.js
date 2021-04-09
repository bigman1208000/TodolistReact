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

function* addTask({ description }) {
  try {
    const tasks = yield call(() => {
      return axios.post(env.BASE_URL + '/add', {
        description,
      });
    });
    yield put({ type: 'REQUEST_ADD_TASK_SUCCESS', task: tasks.data.task });
  } catch (error) {
    yield put({ type: 'REQUEST_ADD_TASK_FAILED' });
  }
}

//watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks);
  yield takeEvery('ADD_TASK', addTask);
}

export default mySaga;
