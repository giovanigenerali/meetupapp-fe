import React, { Component } from 'react';
import moment from 'moment';
import { toastr } from 'react-redux-toastr';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import {
  addDays, setHours, setMinutes, setSeconds,
} from 'date-fns/fp';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdCameraAlt, MdRemoveCircle } from 'react-icons/md';

import ThemesActions from '../../../store/ducks/themes';
import MeetupsActions from '../../../store/ducks/meetups';

import Form from '../../../styles/components/Form';
import Input from '../../../styles/components/Input';
import Textarea from '../../../styles/components/Textarea';
import Button from '../../../styles/components/Button';
import Themes from '../../../styles/components/Themes';
import FileUpload from '../../../styles/components/FileUpload';
import { Container } from './styles';
import '../../../styles/custom/datepicker.scss';

import Navbar from '../../../components/Navbar';

registerLocale('ptBR', ptBR);

class NewMeetup extends Component {
  static propTypes = {
    loadThemesRequest: PropTypes.func.isRequired,
    meetupNewRequest: PropTypes.func.isRequired,
    themes: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
    submittingNewMeetup: PropTypes.bool.isRequired,
  };

  state = {
    title: '',
    description: '',
    when: '',
    where: '',
    themesId: [],
    imagePreview: null,
    file: null,
    fileKey: Date.now(),
  };

  componentDidMount() {
    const { loadThemesRequest } = this.props;

    loadThemesRequest();
  }

  handleDatepicker = (date) => {
    this.setState({ when: date });

    if (date && moment(date).isSameOrBefore(new Date(), 'minute')) {
      toastr.error('Atenção', 'A data do meetup deve ser maior que a data atual.', {
        showCloseButton: true,
        timeOut: 3500,
      });
      this.setState({ when: '' });
      return;
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    const themeId = event.target.value;
    const isChecked = event.target.checked;
    const { themesId } = this.state;

    if (isChecked) {
      this.setState({ themesId: [...themesId, themeId] });
    } else {
      this.setState({ themesId: themesId.filter(theme => theme !== themeId) });
    }
  };

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const mimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    if (!file) {
      return;
    }
    if (event.target.value.length === 0) {
      return;
    }

    if (mimeTypes.indexOf(file.type) === -1) {
      toastr.error('Atenção', 'O tipo de arquivo não é permitido.', {
        showCloseButton: true,
        timeOut: 3500,
      });
      this.handleFileCleanup();
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toastr.error('Atenção', 'O tamanho da imagem é maior que 2mb.', {
        showCloseButton: true,
        timeOut: 3500,
      });
      this.handleFileCleanup();
      return;
    }

    this.setState({ file });

    const previewImageUrl = URL.createObjectURL(file);

    this.setState({ imagePreview: previewImageUrl });
  };

  handleFileCleanup = () => {
    this.setState({ imagePreview: null, file: null, fileKey: Date.now() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      title, description, where, when, themesId, file,
    } = this.state;
    const { meetupNewRequest } = this.props;

    if (!file) {
      toastr.warning('Atenção', 'Escolha uma imagem para o meetup', {
        showCloseButton: true,
        timeOut: 3500,
      });
      return;
    }

    if (themesId.length === 0) {
      toastr.warning('Atenção', 'Escolha um tema para o meetup', {
        showCloseButton: true,
        timeOut: 3500,
      });
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('where', where);
    formData.append('when', moment(when).format('YYYY-MM-DD HH:mm:ss'));
    formData.append('image', file);
    themesId.map(theme => formData.append('themes_id[]', theme));

    meetupNewRequest(formData);
  };

  render() {
    const {
      title, description, when, where, themesId, file, imagePreview, fileKey,
    } = this.state;

    const { submittingNewMeetup, themes } = this.props;

    return (
      <>
        <Navbar />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Título</label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Digite o título do meetup"
              autoComplete="off"
              value={title}
              required
              onChange={this.handleInputChange}
            />

            <label htmlFor="description">Descrição</label>
            <Textarea
              type="text"
              name="description"
              id="description"
              placeholder="Descreva seu meetup"
              autoComplete="off"
              value={description}
              required
              onChange={this.handleInputChange}
            >
              {description}
            </Textarea>

            <label htmlFor="when">Data/hora</label>
            <DatePicker
              name="when"
              id="when"
              showTimeSelect
              selected={when}
              onChange={this.handleDatepicker}
              timeFormat="HH:mm"
              dateFormat="dd/MM/yyyy HH:mm"
              timeCaption="hora"
              placeholderText="Quando o meetup vai acontecer?"
              className="datapicker"
              autoComplete="off"
              locale="ptBR"
              fixedHeight
              minDate={addDays(1, new Date())}
              minTime={[setHours(8, setMinutes(0, setSeconds(0, new Date())))]}
              maxTime={setHours(18, setMinutes(0, setSeconds(0, new Date())))}
              required
            />

            <label htmlFor="image">Imagem</label>
            <FileUpload>
              <div className="fileWrapper">
                {!imagePreview && <MdCameraAlt size={24} />}
                <Input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg, image/jpg"
                  key={fileKey}
                  onChange={event => this.handleFileUpload(event)}
                />
                {imagePreview && (
                  <img src={imagePreview} className="imagePreview" alt="Imagem do meetup" />
                )}
              </div>
              {imagePreview && (
                <div className="fileCleanup">
                  <span>{file.name}</span>
                  <button type="button" onClick={this.handleFileCleanup}>
                    <MdRemoveCircle size={16} />
                  </button>
                </div>
              )}
            </FileUpload>

            <label htmlFor="where">Localização</label>
            <Input
              type="text"
              name="where"
              id="where"
              placeholder="Onde seu meetup irá acontecer?"
              autoComplete="off"
              value={where}
              required
              onChange={this.handleInputChange}
            />

            <span>Tema do meetup</span>
            <Themes>
              {themes.data.map(theme => (
                <label key={theme.id}>
                  <Input
                    type="checkbox"
                    name="themes_id[]"
                    value={theme.id}
                    checked={themesId.includes(String(theme.id))}
                    onChange={this.handleCheckboxChange}
                  />
                  <span>{theme.title}</span>
                </label>
              ))}
            </Themes>

            {submittingNewMeetup ? (
              <Button type="submit" disabled={submittingNewMeetup}>
                Aguarde...
              </Button>
            ) : (
              <Button type="submit">Salvar</Button>
            )}
          </Form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  themes: state.themes,
  submittingNewMeetup: state.meetups.submittingNewMeetup,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...MeetupsActions,
    ...ThemesActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMeetup);
