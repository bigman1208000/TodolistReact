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

function* removeTask({ taskId }) {
  try {
    yield call(() => {
      return axios.delete(env.BASE_URL + '/remove', {
        data: {
          taskId,
        },
      });
    });
    yield put({ type: 'REQUEST_REMOVE_TASK_SUCCESS', taskId });
  } catch (error) {
    yield put({ type: 'REQUEST_REMOVE_TASK_FAILED' });
  }
}

function* toggleIscompletedOfTask({ taskId, isCompleted }) {
  try {
    yield call(() => {
      return axios.put(env.BASE_URL + '/update', {
        taskId,
        isCompleted: !isCompleted,
      });
    });
    yield put({ type: 'REQUEST_TOGGLE_ISCOMPLETED_OF_TASK_SUCCESS', taskId });
  } catch (error) {
    yield put({ type: 'REQUEST_TOGGLE_ISCOMPLETED_OF_TASK_FAILED' });
  }
}

//watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks);
  yield takeEvery('ADD_TASK', addTask);
  yield takeEvery('REMOVE_TASK', removeTask);
  yield takeEvery('TOGGLE_ISCOMPLETED_OF_TASK', toggleIscompletedOfTask);
}

export default mySaga;
