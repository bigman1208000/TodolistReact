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
import { getTasks, addTask } from '../../redux/actions/index';

function HomePageContent({
  tasks,
  isLoadingGetTasks,
  isErrorGetTasks,
  getTasks,
  addTask,
}) {
  useEffect(() => {
    getTasks();
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
                  List is empty. Please add a new task.
                </Text>
              ) : (
                tasks.map((task) => (
                  <TaskCard task={task} className={styles.taskCard} />
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
};

export default connect(mapStateToProps, mapActionsToProps)(HomePageContent);
