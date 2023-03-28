import React from 'react';
import { Link } from 'react-scroll';
import { site_logo } from '@/assets';

const Logo: React.FC = () => (
  <Link to="root" className="logo">
    <img src={site_logo} alt="Logo Link" />
  </Link>
);

export default Logo;
