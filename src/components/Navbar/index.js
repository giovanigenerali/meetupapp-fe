import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdPersonOutline } from 'react-icons/md';
import Logo from '../../styles/components/Logo';
import { Container, Nav } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Logo type="white" alt="Logo Meetapp" />
      <Nav>
        <ul>
          <li>
            <NavLink to="/dashboard" exact>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/meetups/search">Buscar</NavLink>
          </li>
          <li>
            <NavLink to="/meetups/new">Novo meetup</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/profile" title="Perfil">
              <MdPersonOutline className="profileIcon" size={34} />
            </NavLink>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
