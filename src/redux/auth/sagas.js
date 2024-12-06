import { put, all, takeLatest } from 'redux-saga/effects';
import { setCookie, removeCookie } from '@src/utils/cookie';
import { A_MINUTE } from '@src/constants';
import { loginRequest, loginSuccess, loginFailure, logout } from '../userSlice';

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = yield response.json();
    console.log('Login response:', data);
    const { accessToken, user } = data;
    setCookie('accessToken', accessToken, A_MINUTE);
    yield put(loginSuccess({ user, accessToken }));
  } catch (error) {
    yield put(loginFailure({ error: error.message }));
  }
}

function* logoutSaga() {
  try {
    removeCookie('accessToken');
    yield put(logout());
  } catch (error) {
    console.error('Error logging out:', error);
  }
}

function* watchLogin() {
  yield takeLatest(loginRequest.type, loginSaga);
}

function* watchLogout() {
  yield takeLatest(logout.type, logoutSaga);
}

export default function* rootSaga() {
  yield all([watchLogin(), watchLogout()]);
}
