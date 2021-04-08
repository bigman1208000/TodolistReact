import React from 'react';

//styles
import styles from './index.module.css';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';
import Button from '../StyledSystem/button';

function NavigationButton() {
  return (
    <Box className={styles.div}>
      <Text>TEST</Text>
      <Button>TEST</Button>
    </Box>
  );
}

export default NavigationButton;
