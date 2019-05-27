/* eslint-disable max-len */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  meetupNewRequest: ['data'],
  meetupNewSuccess: null,
  meetupNewFailed: null,

  meetupSubscribedRequest: null,
  meetupSubscribedSuccess: ['subscribed'],
  meetupSubscribedFailed: null,

  meetupUpcomingRequest: null,
  meetupUpcomingSuccess: ['upcoming'],
  meetupUpcomingFailed: null,

  meetupRecomendedRequest: null,
  meetupRecomendedSuccess: ['recomended'],
  meetupRecomendedFailed: null,

  meetupSearchRequest: ['title'],
  meetupSearchSuccess: ['search'],
  meetupSearchFailed: null,

  meetupDetailsRequest: ['id'],
  meetupDetailsSuccess: ['meetup'],
  meetupDetailsFailed: null,

  meetupSubscribeRequest: ['id'],
  meetupSubscribeSuccess: null,
  meetupSubscribeFailed: null,

  meetupUnsubscribeRequest: ['id'],
  meetupUnsubscribeSuccess: null,
  meetupUnsubscribeFailed: null,
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  subscribed: [],
  upcoming: [],
  recomended: [],
  search: [],
  title: null,
  id: null,
  meetup: null,
  loadingMeetupsSubscribed: false,
  loadingMeetupsUpcoming: false,
  loadingMeetupsRecomended: false,
  loadingMeetupSearch: false,
  loadingMeetupDetails: false,

  submittingNewMeetup: false,
  submittingSubscribeMeetup: false,
  submittingUnsubscribeMeetup: false,
});

/* Reducers */

export const requestMeetupNew = state => state.merge({ submittingNewMeetup: true });
export const successMeetupNew = state => state.merge({ submittingNewMeetup: false });
export const failedMeetupNew = state => state.merge({ submittingNewMeetup: false });

export const requestMeetupSubscribed = state => state.merge({ loadingMeetupsSubscribed: true });
export const successMeetupSubscribed = (state, { subscribed }) => state.merge({ subscribed, loadingMeetupsSubscribed: false });
export const failedMeetupSubscribed = state => state.merge({ loadingMeetupsSubscribed: false });

export const requestMeetupUpcoming = state => state.merge({ loadingMeetupsUpcoming: true });
export const successMeetupUpcoming = (state, { upcoming }) => state.merge({ upcoming, loadingMeetupsUpcoming: false });
export const failedMeetupUpcoming = state => state.merge({ loadingMeetupsUpcoming: false });

export const requestMeetupRecomended = state => state.merge({ loadingMeetupsRecomended: true });
export const successMeetupRecomended = (state, { recomended }) => state.merge({ recomended, loadingMeetupsRecomended: false });
export const failedMeetupRecomended = state => state.merge({ loadingMeetupsRecomended: false });

export const requestMeetupSearch = (state, { title }) => state.merge({ title, loadingMeetupSearch: true });
export const successMeetupSearch = (state, { search }) => state.merge({ search, loadingMeetupSearch: false });
export const failedMeetupSearch = state => state.merge({ loadingMeetupSearch: false });

export const requestMeetupDetails = (state, { id }) => state.merge({ id, loadingMeetupDetails: true });
export const successMeetupDetails = (state, { meetup }) => state.merge({ meetup, loadingMeetupDetails: false });
export const failedMeetupDetails = state => state.merge({ loadingMeetupDetails: false });

export const requestMeetupSubscribe = (state, { id }) => state.merge({ id, submittingSubscribeMeetup: true });
export const successMeetupSubscribe = state => state.merge({ submittingSubscribeMeetup: false });
export const failedMeetupSubscribe = state => state.merge({ submittingSubscribeMeetup: false });

export const requestMeetupUnsubscribe = (state, { id }) => state.merge({ id, submittingUnsubscribeMeetup: true });
export const successMeetupUnsubscribe = state => state.merge({ submittingUnsubscribeMeetup: false });
export const failedMeetupUnsubscribe = state => state.merge({ submittingUnsubscribeMeetup: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MEETUP_NEW_REQUEST]: requestMeetupNew,
  [Types.MEETUP_NEW_SUCCESS]: successMeetupNew,
  [Types.MEETUP_NEW_FAILED]: failedMeetupNew,

  [Types.MEETUP_SUBSCRIBED_REQUEST]: requestMeetupSubscribed,
  [Types.MEETUP_SUBSCRIBED_SUCCESS]: successMeetupSubscribed,
  [Types.MEETUP_SUBSCRIBED_FAILED]: failedMeetupSubscribed,

  [Types.MEETUP_UPCOMING_REQUEST]: requestMeetupUpcoming,
  [Types.MEETUP_UPCOMING_SUCCESS]: successMeetupUpcoming,
  [Types.MEETUP_UPCOMING_FAILED]: failedMeetupUpcoming,

  [Types.MEETUP_RECOMENDED_REQUEST]: requestMeetupRecomended,
  [Types.MEETUP_RECOMENDED_SUCCESS]: successMeetupRecomended,
  [Types.MEETUP_RECOMENDED_FAILED]: failedMeetupRecomended,

  [Types.MEETUP_SEARCH_REQUEST]: requestMeetupSearch,
  [Types.MEETUP_SEARCH_SUCCESS]: successMeetupSearch,
  [Types.MEETUP_SEARCH_FAILED]: failedMeetupSearch,

  [Types.MEETUP_DETAILS_REQUEST]: requestMeetupDetails,
  [Types.MEETUP_DETAILS_SUCCESS]: successMeetupDetails,
  [Types.MEETUP_DETAILS_FAILED]: failedMeetupDetails,

  [Types.MEETUP_SUBSCRIBE_REQUEST]: requestMeetupSubscribe,
  [Types.MEETUP_SUBSCRIBE_SUCCESS]: successMeetupSubscribe,
  [Types.MEETUP_SUBSCRIBE_FAILED]: failedMeetupSubscribe,

  [Types.MEETUP_UNSUBSCRIBE_REQUEST]: requestMeetupUnsubscribe,
  [Types.MEETUP_UNSUBSCRIBE_SUCCESS]: successMeetupUnsubscribe,
  [Types.MEETUP_UNSUBSCRIBE_FAILED]: failedMeetupUnsubscribe,
});
