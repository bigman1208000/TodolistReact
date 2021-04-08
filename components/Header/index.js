import React from 'react';

//styles
import styles from './index.module.css';

//components
import Logo from '../Logo/index';
import Navigation from '../Navigation/index';

//components - styled-system
import Box from '../StyledSystem/box';

function Header({ selectedPage }) {
  return (
    <Box className={styles.root}>
      <Logo />
      <Navigation selectedPage={selectedPage} />
    </Box>
  );
}

export default Header;
