import React, { useState } from 'react';
import cn from 'classnames';

//styles
import styles from './index.module.css';

//components
import TimeCalculator from '../timeCalculator';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';
import Button from '../StyledSystem/button';

//components - icons
import * as Icons from '../Icons';

function TaskCard({ className, task, removeTask }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const removeTaskInner = () => {
    removeTask({ taskId: task._id });
  };

  const toogleIsCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Box className={cn(styles.root, className)}>
      <Button
        className={styles.leftContent}
        onClick={() => {
          toogleIsCompleted();
        }}
      >
        {isCompleted ? (
          <Icons.CheckCircle className={styles.checkCircleIcon} />
        ) : (
          <Box className={styles.emptyCheckBox}></Box>
        )}
      </Button>

      <Box className={styles.midContent}>
        <Text
          className={styles.taskText}
          style={{
            '--textDecoration': isCompleted
              ? 'line-through var(--c-green)'
              : 'none',
          }}
        >
          {task.description}
        </Text>
      </Box>

      <Box className={styles.rightContent}>
        <Text className={styles.dateText}>
          <TimeCalculator createdAt={task.created_at} />
        </Text>
        <Button className={styles.wastebasketButton} onClick={removeTaskInner}>
          <Icons.Wastebasket className={styles.wastebasketIcon} />
        </Button>
      </Box>
    </Box>
  );
}

export default TaskCard;
