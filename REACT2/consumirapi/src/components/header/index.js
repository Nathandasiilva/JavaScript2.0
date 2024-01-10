import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/Login">
        <FaSignInAlt size={24} />
      </Link>
    </nav>
  );
}
