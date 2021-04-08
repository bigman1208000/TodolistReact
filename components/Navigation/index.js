import React from 'react';

//styles
import styles from './index.module.css';

//components
import NavigationButton from '../NavigationButton/index';

//components - styled-system
import Box from '../StyledSystem/box';

function Navigation({ selectedPage }) {
  return (
    <Box className={styles.box}>
      <NavigationButton
        type="completed"
        selected={selectedPage === 'completed'}
      />
      <NavigationButton
        type="incompleted"
        selected={selectedPage === 'incompleted'}
      />
    </Box>
  );
}

export default Navigation;
