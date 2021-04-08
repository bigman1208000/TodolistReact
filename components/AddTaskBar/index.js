import React, { useState } from 'react';
import cn from 'classnames';

//styles
import styles from './index.module.css';

//components
import AddTaskTextInput from '../AddTaskTextInput/index';
import AddTaskButton from '../AddTaskButton/index';

//components - styled-system
import Box from '../StyledSystem/box';

function AddTaskBar({ className }) {
  const [task, setTask] = useState('');
  const onTaskChange = (event) => setTask(event.target.value);

  const addTask = () => {
    setTask('');
  };

  return (
    <Box className={cn(styles.root, className)}>
      <AddTaskTextInput
        task={task}
        onTaskChange={onTaskChange}
        addTask={addTask}
      />
      {task.trim() !== '' && (
        <AddTaskButton
          className={styles.addTaskButton}
          task={task}
          addTask={addTask}
        />
      )}
    </Box>
  );
}

export default AddTaskBar;
