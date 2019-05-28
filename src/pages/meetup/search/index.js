/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdSearch, MdRemoveCircleOutline } from 'react-icons/md';
import MeetupsActions from '../../../store/ducks/meetups';

import Loading from '../../../styles/components/Loading';
import {
  Container,
  MeetupSearch,
  MeetupSearchInput,
  MeetupContainer,
  MeetupList,
  Message,
} from './styles';

import Navbar from '../../../components/Navbar';
import MeetupItem from '../../../components/MeetupItem';

class Search extends Component {
  static propTypes = {
    meetupSearchRequest: PropTypes.func.isRequired,
    meetups: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    loadingMeetupSearch: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  state = {
    search: '',
    meetups: {},
    total: 0,
  };

  componentDidMount() {
    this.searchInput.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loadingMeetupSearch) {
      const { meetups } = nextProps;
      if (meetups) {
        this.setState({ meetups, total: parseInt(meetups.total, 10) });
      }
    }
  }

  handleChangeInputSearch = (event) => {
    const search = event.target.value;

    if (search.trim().length > 0) {
      this.setState({ search });
    } else {
      this.setState({ meetups: {} });
    }

    if (search.trim().length === 0) {
      this.setState({ search: '', meetups: {} });
    }
  };

  handleSubmitSearch = (event) => {
    const { meetupSearchRequest } = this.props;
    const { search } = this.state;

    if (event.key === 'Enter') {
      meetupSearchRequest(search);
    }
  };

  handleClearSearch = () => {
    this.setState({
      search: '',
      meetups: {},
      total: 0,
    });
  };

  render() {
    const { loadingMeetupSearch } = this.props;
    const { search, meetups, total } = this.state;

    return (
      <>
        <Navbar />
        <Container>
          <MeetupSearch>
            <MdSearch className="searchIcon" size={24} />
            <MeetupSearchInput
              ref={this.searchInput}
              value={search}
              onChange={event => this.handleChangeInputSearch(event)}
              placeholder="Digite o título do meetup e pressione enter"
              onKeyDown={event => this.handleSubmitSearch(event)}
            />
            {!loadingMeetupSearch && search && (
              <MdRemoveCircleOutline
                className="searchClear"
                onClick={this.handleClearSearch}
                size={20}
              />
            )}
          </MeetupSearch>

          <MeetupContainer>
            {!loadingMeetupSearch && meetups.data && meetups.data.length > 0 && (
              <Message>
                {total > 1 ? 'Foram encontrados' : 'Foi encontrato'}
                {' '}
                <span>{total}</span>
                {' '}
                {total > 1 ? 'meetups' : 'meetup'}
              </Message>
            )}

            {loadingMeetupSearch && <Loading>Efetuando busca...</Loading>}

            {!loadingMeetupSearch && meetups.data && meetups.data.length > 0 && (
              <MeetupList>
                {meetups.data.map(meetup => (
                  <MeetupItem key={meetup.id} meetup={meetup} />
                ))}
              </MeetupList>
            )}

            {!loadingMeetupSearch && meetups.data && meetups.data.length === 0 && (
              <Message>
                Nenhum meetup encontrado com o título:
                {' '}
                <span>{search}</span>
              </Message>
            )}
          </MeetupContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loadingMeetupSearch: state.meetups.loadingMeetupSearch,
  meetups: state.meetups.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
