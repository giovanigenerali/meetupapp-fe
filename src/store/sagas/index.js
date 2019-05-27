import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { signIn, signUp } from './auth';

import { ThemesTypes } from '../ducks/themes';
import { loadThemes } from './themes';

import { MeetupsTypes } from '../ducks/meetups';
import {
  newMeetup,
  filterMeetup,
  searchMeetup,
  detailsMeetup,
  subscribeMeetup,
  unsubscribeMeetup,
} from './meetups';

import { ProfileTypes } from '../ducks/profile';
import { loadProfile, updateProfile } from './profile';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(ThemesTypes.LOAD_THEMES_REQUEST, loadThemes),

    takeLatest(MeetupsTypes.MEETUP_NEW_REQUEST, newMeetup),

    takeLatest(MeetupsTypes.MEETUP_SUBSCRIBED_REQUEST, filterMeetup, { filter: 'subscribed' }),
    takeLatest(MeetupsTypes.MEETUP_UPCOMING_REQUEST, filterMeetup, { filter: 'upcoming' }),
    takeLatest(MeetupsTypes.MEETUP_RECOMENDED_REQUEST, filterMeetup, { filter: 'recomended' }),
    takeLatest(MeetupsTypes.MEETUP_SEARCH_REQUEST, searchMeetup),
    takeLatest(MeetupsTypes.MEETUP_DETAILS_REQUEST, detailsMeetup),
    takeLatest(MeetupsTypes.MEETUP_SUBSCRIBE_REQUEST, subscribeMeetup),
    takeLatest(MeetupsTypes.MEETUP_UNSUBSCRIBE_REQUEST, unsubscribeMeetup),

    takeLatest(ProfileTypes.LOAD_PROFILE_REQUEST, loadProfile),
    takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, updateProfile),
  ]);
}
