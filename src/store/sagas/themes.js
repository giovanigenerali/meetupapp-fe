import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '../../services/api';

import ThemesActions from '../ducks/themes';

export function* loadThemes() {
  try {
    const response = yield call(api.get, 'themes');

    yield put(ThemesActions.loadThemesSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao carregar a lista de temas para meetup.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}
