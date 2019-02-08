import React from 'react';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Header: React.FC<HeaderProps> = ({ children, type }) => (
  <Typography variant={type}>{children}</Typography>
);

export default Header;
