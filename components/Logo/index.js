import React from 'react';
import Link from 'next/link';

//styles
import styles from './index.module.css';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//components - icons
import * as Icons from '../Icons';

function Logo() {
  return (
    <Link href="./">
      <Box className={styles.box}>
        <Icons.Logo className={styles.icon} />
        <Text className={styles.name}>Todolist</Text>
      </Box>
    </Link>
  );
}

export default Logo;
