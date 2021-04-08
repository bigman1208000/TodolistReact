import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

//styles
import styles from './index.module.css';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

function NavigationButton({ type, selected }) {
  return (
    <Link
      href={
        type === 'completed'
          ? './completed'
          : type === 'incompleted' && './incompleted'
      }
    >
      <Box className={styles.box}>
        <Text
          className={cn(styles.text, selected && styles.selectedButtonText)}
        >
          {type === 'completed'
            ? 'Completed'
            : type === 'incompleted' && 'Incompleted'}
        </Text>
      </Box>
    </Link>
  );
}

export default NavigationButton;
