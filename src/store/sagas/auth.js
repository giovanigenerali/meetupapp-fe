import { all, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('@meetapp:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    const user = yield call(api.get, 'profile');
    const { preferences } = user.data;

    if (preferences.length === 0) {
      localStorage.setItem('@meetapp:first_login', true);
      yield put(push('/profile'));
    } else {
      localStorage.removeItem('@meetapp:first_login');
      yield put(push('/dashboard'));
    }
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* signUp({ name, email, password }) {
  try {
    const user = yield call(api.post, 'users', { name, email, password });

    const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('@meetapp:token', response.data.token);

    yield put(AuthActions.signUpSuccess(response.data.token));

    if (!user.preferences) {
      localStorage.setItem('@meetapp:first_login', true);
    } else {
      localStorage.removeItem('@meetapp:first_login');
    }

    yield put(push('/profile'));
  } catch (err) {
    yield all(
      err.response.data.map(error => put(
        toastrActions.add({
          type: 'error',
          title: 'Falha ao criar conta',
          message: error.message,
          options: {
            showCloseButton: true,
          },
        }),
      )),
    );
  }
}
