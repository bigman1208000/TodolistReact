import React from 'react';
import cn from 'classnames';

//styles
import styles from './index.module.css';

//components - styled-system
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
