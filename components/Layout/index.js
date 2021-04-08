import React from 'react';
import cn from 'classnames';

//styles
import styles from './index.module.css';

//components - styled-system
import Box from '../StyledSystem/box';

function Layout({ className, children, ...props }) {
  return (
    <Box className={cn(styles.layout, className)} {...props}>
      {children}
    </Box>
  );
}

export default Layout;
