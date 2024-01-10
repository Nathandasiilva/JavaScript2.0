import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/Login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/asdasd">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </nav>
  );
}
