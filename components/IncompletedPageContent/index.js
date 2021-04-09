import React, { useEffect } from 'react';

//styles
import styles from './index.module.css';

//components
import TaskCard from '../TaskCard/index';
import Spinner from '../Spinner/index';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//redux
import { connect } from 'react-redux';
import {
  getTasks,
  removeTask,
  toggleIscompletedOfTask,
} from '../../redux/actions/index';

function IncompletedPageContent({
  tasks,
  isLoadingGetTasks,
  isErrorGetTasks,
  getTasks,
  removeTask,
  toggleIscompletedOfTask,
}) {
  useEffect(() => {
    //bu if kontrolünü yapma sebebim pageler arasında dolaşırken datalar çekilmişse bir daha fetch atmasını engellemek. Redux'da tutuyorum zaten.
    if (tasks.length === 0) {
      getTasks();
    }
  }, []);

  return (
    <Box className={styles.root}>
      <Text className={styles.title}>Incompleted Tasks</Text>
      {isLoadingGetTasks ? (
        <Spinner className={styles.spinner} />
      ) : (
        <>
          {isErrorGetTasks ? (
            <Text className={styles.warnText}>
              While fetching the tasks, an error occurred. Please try again.
            </Text>
          ) : (
            <>
              {tasks.length === 0 ? (
                <Text className={styles.warnText}>
                  There are not any incompleted tasks in our records.
                </Text>
              ) : (
                tasks.map(
                  (task) =>
                    !task.isCompleted && (
                      <TaskCard
                        className={styles.taskCard}
                        task={task}
                        removeTask={removeTask}
                        toggleIscompletedOfTask={toggleIscompletedOfTask}
                      />
                    ),
                )
              )}
            </>
          )}
        </>
      )}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    isLoadingGetTasks: state.isLoadingGetTasks,
    isErrorGetTasks: state.isErrorGetTasks,
  };
};

const mapActionsToProps = {
  getTasks,
  removeTask,
  toggleIscompletedOfTask,
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(IncompletedPageContent);
