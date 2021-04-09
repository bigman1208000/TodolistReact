import React, { useEffect } from 'react';

//styles
import styles from './index.module.css';

//components
import AddTaskBar from '../AddTaskBar/index';
import TaskCard from '../TaskCard/index';
import Spinner from '../Spinner/index';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//redux
import { connect } from 'react-redux';
import {
  getTasks,
  addTask,
  removeTask,
  toggleIscompletedOfTask,
} from '../../redux/actions/index';

function HomePageContent({
  tasks,
  isLoadingGetTasks,
  isErrorGetTasks,
  getTasks,
  addTask,
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
      <AddTaskBar className={styles.addTaskBar} addTask={addTask} />
      <Text className={styles.todoAllListText}>To-Do All List</Text>
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
                  There are not any tasks in our records. Please add a new task.
                </Text>
              ) : (
                tasks.map((task) => (
                  <TaskCard
                    className={styles.taskCard}
                    task={task}
                    removeTask={removeTask}
                    toggleIscompletedOfTask={toggleIscompletedOfTask}
                  />
                ))
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
  addTask,
  removeTask,
  toggleIscompletedOfTask,
};

export default connect(mapStateToProps, mapActionsToProps)(HomePageContent);
