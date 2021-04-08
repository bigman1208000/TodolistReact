import React from 'react';

//styles
import styles from './index.module.css';

//components
import AddTaskBar from '../AddTaskBar/index';
import TaskCard from '../TaskCard/index';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//test data
import tasks from '../../testData';

function HomePageContent() {
  return (
    <Box className={styles.root}>
      <AddTaskBar className={styles.addTaskBar} />
      <Text className={styles.todoAllListText}>To-Do All List</Text>
      {tasks.map((task) => (
        <TaskCard task={task} className={styles.taskCard} />
      ))}
    </Box>
  );
}

export default HomePageContent;
