import { put, all, takeLatest, delay } from 'redux-saga/effects';
import { setCookie, removeCookie } from '@src/utils/cookie';
import { jwtDecode } from 'jwt-decode';
import { loginRequest, loginSuccess, loginFailure, logout } from '../userSlice';

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield fetch(`${import.meta.env.VITE_URL}/api/users/login`, {
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

    // Decode the JWT to get the expiration time
    const decodedToken = jwtDecode(accessToken);
    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

    // Set the cookie with the expiration time
    setCookie('accessToken', accessToken, expirationTime - Date.now());

    yield put(loginSuccess({ user, accessToken }));

    // Automatically log out the user when the token expires
    yield delay(expirationTime - Date.now());
    yield put(logout());
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
