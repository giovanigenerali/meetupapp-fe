import styled from 'styled-components';

import LogoDefault from '../../assets/logo.svg';
import LogoWhite from '../../assets/logo-white.svg';

const types = {
  default: LogoDefault,
  white: LogoWhite,
};

const Logo = styled.img.attrs(props => ({
  src: types[props.type],
}))``;

export default Logo;
