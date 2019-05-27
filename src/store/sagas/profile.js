/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '../../services/api';

import ProfileActions from '../ducks/profile';

export function* loadProfile() {
  try {
    const response = yield call(api.get, 'profile');

    yield put(ProfileActions.loadProfileSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao carregar suas informações.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* updateProfile({
  name, password, passwordConfirmation, preferencesId,
}) {
  try {
    const data = {
      name,
      password,
      password_confirmation: passwordConfirmation,
      preferences_id: preferencesId,
    };
    const response = yield call(api.put, 'profile', data);
    yield put(ProfileActions.updateProfileSuccess(response.data));

    const firstLogin = !!localStorage.getItem('@meetapp:first_login');

    if (firstLogin) {
      localStorage.removeItem('@meetapp:first_login');

      yield put(push('/dashboard'));
    } else {
      yield put(
        toastrActions.add({
          type: 'success',
          title: 'Sucesso',
          message: 'As informações do seu perfil foram atualizadas.',
          options: {
            showCloseButton: true,
            timeOut: 3500,
          },
        }),
      );
    }
  } catch (err) {
    yield put(ProfileActions.updateProfileFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao atualizar suas informações.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}
