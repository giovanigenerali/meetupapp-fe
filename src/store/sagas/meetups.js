import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '../../services/api';

import MeetupsActions from '../ducks/meetups';

export function* newMeetup({ data }) {
  try {
    yield call(api.post, 'meetups', data);

    yield put(MeetupsActions.meetupNewSuccess());
    yield put(push('/dashboard'));
  } catch (err) {
    yield put(MeetupsActions.meetupNewFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Ocorreu um erro ao criar o meetup.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* filterMeetup({ filter }) {
  try {
    const response = yield call(api.get, `meetups?filter=${filter}`);

    if (filter === 'subscribed') {
      yield put(MeetupsActions.meetupSubscribedSuccess(response.data));
    } else if (filter === 'upcoming') {
      yield put(MeetupsActions.meetupUpcomingSuccess(response.data));
    } else if (filter === 'recomended') {
      yield put(MeetupsActions.meetupRecomendedSuccess(response.data));
    }
  } catch (err) {
    if (filter === 'subscribed') {
      yield put(MeetupsActions.meetupSubscribedFailed());
    } else if (filter === 'upcoming') {
      yield put(MeetupsActions.meetupUpcomingFailed());
    } else if (filter === 'recomended') {
      yield put(MeetupsActions.meetupRecomendedFailed());
    }

    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao carregar os meetups.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* searchMeetup({ title }) {
  try {
    const response = yield call(api.get, `meetups?title=${title}`);

    yield put(MeetupsActions.meetupSearchSuccess(response.data));
  } catch (err) {
    yield put(MeetupsActions.meetupSearchFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao buscar os meetups.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* detailsMeetup({ id }) {
  try {
    const response = yield call(api.get, `meetups/${id}`);

    yield put(MeetupsActions.meetupDetailsSuccess(response.data));
  } catch (err) {
    yield put(MeetupsActions.meetupDetailsFailed(err));
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao carregar o meetup.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* subscribeMeetup({ id }) {
  try {
    yield call(api.post, `meetups/${id}/subscribe`);

    yield put(MeetupsActions.meetupSubscribeSuccess());
    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso',
        message: 'Sua inscrição foi feita no meetup.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
    yield put(push('/dashboard'));
  } catch (err) {
    yield put(MeetupsActions.meetupSubscribeFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao fazer sua inscrição no meetup.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}

export function* unsubscribeMeetup({ id }) {
  try {
    yield call(api.delete, `meetups/${id}/unsubscribe`);

    yield put(MeetupsActions.meetupUnsubscribeSuccess());
    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso',
        message: 'O cancelamento da sua inscrição no meetup foi concluído.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
    yield put(push('/dashboard'));
  } catch (err) {
    yield put(MeetupsActions.meetupUnsubscribeFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Atenção',
        message: 'Erro ao fazer o cancelamento da sua inscrição no meetup.',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      }),
    );
  }
}
