import React from 'react';

//styles
import styles from './index.module.css';

//components - styled-system
import Input from '../StyledSystem/input';

function AddTaskTextInput({ task, onTaskChange, addTask, ...props }) {
  //klavye eventlerini dinliyor. User entera basarsa task eklenecek.
  const onKeyPress = (event) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      addTask();
    }
  };

  return (
    <Input
      className={styles.input}
      type="text"
      placeholder="Add a new task..."
      value={task}
      onChange={onTaskChange}
      onKeyPress={onKeyPress}
      {...props}
    />
  );
}

export default AddTaskTextInput;
