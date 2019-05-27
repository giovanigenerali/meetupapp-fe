import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../../store/ducks/auth';

import Logo from '../../../styles/components/Logo';
import Form from '../../../styles/components/Form';
import Button from '../../../styles/components/Button';
import Input from '../../../styles/components/Input';
import { Container } from '../styles';

class Signin extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Logo type="default" alt="Logo Meetapp" />

        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
            required
            value={email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha secreta"
            autoComplete="new-password"
            required
            value={password}
            onChange={this.handleInputChange}
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/signup">Criar conta grátis</Link>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Signin);
