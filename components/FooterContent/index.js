import React from 'react';

//styles
import styles from './index.module.css';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//components - icons
import * as Icons from '../Icons';

function FooterContent() {
  return (
    <Box className={styles.root}>
      <Icons.LogoGetir className={styles.icon} />
      <Text className={styles.assignment}>assignment</Text>
    </Box>
  );
}

export default FooterContent;
