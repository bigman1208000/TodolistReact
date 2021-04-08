import React from 'react';

//styles
import styles from './index.module.css';

//components
import FooterContent from '../FooterContent/index';

//components - styled-system
import Box from '../StyledSystem/box';

function Footer() {
  return (
    <Box className={styles.root}>
      <FooterContent />
    </Box>
  );
}

export default Footer;
