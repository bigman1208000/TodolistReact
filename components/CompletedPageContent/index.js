import React from 'react';

//styles
import styles from './index.module.css';

//components
import TaskCard from '../TaskCard/index';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//test data
import tasks from '../../testData';

function CompletedPageContent() {
  return (
    <Box className={styles.root}>
      <Text className={styles.title}>Completed Tasks</Text>
      {tasks.map(
        (task) =>
          task.isCompleted && (
            <TaskCard task={task} className={styles.taskCard} />
          ),
      )}
    </Box>
  );
}

export default CompletedPageContent;
