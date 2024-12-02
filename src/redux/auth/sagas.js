import { put, all, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { setCookie } from '@src/utils/cookie';
import { A_WEEK } from '@src/constants';
import { loginRequest, loginSuccess, loginFailure } from '../userSlice';

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(axios.post, '/api/login', { email, password });
    const { accessToken, user } = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    setCookie('accessToken', accessToken, A_WEEK);
    yield put(loginSuccess({ user, accessToken }));
  } catch (error) {
    yield put(loginFailure({ error: error.message }));
  }
}

function* watchLogin() {
  yield takeLatest(loginRequest.type, loginSaga);
}

export default function* rootSaga() {
  yield all([watchLogin()]);
}
