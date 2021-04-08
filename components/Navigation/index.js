import React from 'react';
import cn from 'classnames';

//styles
import styles from './index.module.css';

//components
import NavigationButton from '../NavigationButton/index';

//components - styled-system
import Box from '../StyledSystem/box';

function Navigation({ className, selectedPage }) {
  return (
    <Box className={cn(styles.box, className)}>
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
