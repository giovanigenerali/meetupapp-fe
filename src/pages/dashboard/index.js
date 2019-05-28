import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupsActions from '../../store/ducks/meetups';

import Loading from '../../styles/components/Loading';
import {
  Container, MeetupContainer, MeetupContainerTitle, MeetupList, Message,
} from './styles';

import Navbar from '../../components/Navbar';
import MeetupItem from '../../components/MeetupItem';

class Dashboard extends Component {
  static propTypes = {
    meetupSubscribedRequest: PropTypes.func.isRequired,
    meetupUpcomingRequest: PropTypes.func.isRequired,
    meetupRecomendedRequest: PropTypes.func.isRequired,
    meetupsSubscribed: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    meetupsUpcoming: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    meetupsRecomended: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    loadingMeetupsSubscribed: PropTypes.bool.isRequired,
    loadingMeetupsUpcoming: PropTypes.bool.isRequired,
    loadingMeetupsRecomended: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { meetupSubscribedRequest, meetupUpcomingRequest, meetupRecomendedRequest } = this.props;

    meetupSubscribedRequest();
    meetupUpcomingRequest();
    meetupRecomendedRequest();
  }

  render() {
    const {
      meetupsSubscribed,
      meetupsUpcoming,
      meetupsRecomended,
      loadingMeetupsSubscribed,
      loadingMeetupsUpcoming,
      loadingMeetupsRecomended,
    } = this.props;

    return (
      <>
        <Navbar />
        <Container>
          <MeetupContainer>
            <MeetupContainerTitle>Inscrições</MeetupContainerTitle>
            {loadingMeetupsSubscribed && <Loading>Carregando...</Loading>}
            {!loadingMeetupsSubscribed
              && meetupsSubscribed.data
              && meetupsSubscribed.data.length > 0 && (
                <MeetupList>
                  {!loadingMeetupsSubscribed
                    && meetupsSubscribed.data
                    && meetupsSubscribed.data.length > 0
                    && meetupsSubscribed.data.map(meetup => (
                      <MeetupItem key={meetup.id} meetup={meetup} />
                    ))}
                </MeetupList>
            )}
            {!loadingMeetupsSubscribed
              && meetupsSubscribed.data
              && meetupsSubscribed.data.length === 0 && (
                <Message>Você não está inscrito em nenhum meetup.</Message>
            )}
            {!loadingMeetupsSubscribed && !meetupsSubscribed.data && (
              <Message>Não foi possível verificar suas inscrições.</Message>
            )}

            <MeetupContainerTitle>Próximos meetups</MeetupContainerTitle>
            {loadingMeetupsUpcoming && <Loading>Carregando...</Loading>}
            {!loadingMeetupsUpcoming && meetupsUpcoming.data && meetupsUpcoming.data.length > 0 && (
              <MeetupList>
                {!loadingMeetupsUpcoming
                  && meetupsUpcoming.data
                  && meetupsUpcoming.data.length > 0
                  && meetupsUpcoming.data.map(meetup => (
                    <MeetupItem key={meetup.id} meetup={meetup} />
                  ))}
              </MeetupList>
            )}
            {!loadingMeetupsUpcoming
              && meetupsUpcoming.data
              && meetupsUpcoming.data.length === 0 && (
                <Message>Não existe nenhum meetup para os próximos dias</Message>
            )}
            {!loadingMeetupsUpcoming && !meetupsSubscribed.data && (
              <Message>Não foi possível carregar os próximos.</Message>
            )}

            <MeetupContainerTitle>Recomendados</MeetupContainerTitle>
            {loadingMeetupsRecomended && <Loading>Carregando...</Loading>}
            {!loadingMeetupsRecomended
              && meetupsRecomended.data
              && meetupsRecomended.data.length > 0 && (
                <MeetupList>
                  {!loadingMeetupsRecomended
                    && meetupsRecomended.data
                    && meetupsRecomended.data.length > 0
                    && meetupsRecomended.data.map(meetup => (
                      <MeetupItem key={meetup.id} meetup={meetup} />
                    ))}
                </MeetupList>
            )}
            {!loadingMeetupsRecomended
              && meetupsRecomended.data
              && meetupsRecomended.data.length === 0 && (
                <Message>Nenhum meetup recomendado para você no momento.</Message>
            )}
            {!loadingMeetupsRecomended && !meetupsSubscribed.data && (
              <Message>Não foi possível verificar os meetups recomendados para você.</Message>
            )}
          </MeetupContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loadingMeetupsSubscribed: state.meetups.loadingMeetupsSubscribed,
  meetupsSubscribed: state.meetups.subscribed,
  loadingMeetupsUpcoming: state.meetups.loadingMeetupsUpcoming,
  meetupsUpcoming: state.meetups.upcoming,
  loadingMeetupsRecomended: state.meetups.loadingMeetupsRecomended,
  meetupsRecomended: state.meetups.recomended,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
