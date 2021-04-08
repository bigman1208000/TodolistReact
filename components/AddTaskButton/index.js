import React from 'react';
import cn from 'classnames';

//styles
import styles from './index.module.css';

//components - styled-system
import Button from '../StyledSystem/button';

//components - icons
import * as Icons from '../Icons';

function AddTaskButton({ className, addTask }) {
  return (
    <Button className={cn(styles.box, className)} onClick={addTask}>
      <Icons.Plus className={styles.icon} />
    </Button>
  );
}

export default AddTaskButton;
