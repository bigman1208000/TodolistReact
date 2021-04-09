import React, { useEffect } from 'react';

//styles
import styles from './index.module.css';

//components
import AddTaskBar from '../AddTaskBar/index';
import TaskCard from '../TaskCard/index';

//components - styled-system
import Box from '../StyledSystem/box';
import Text from '../StyledSystem/text';

//redux
import { connect } from 'react-redux';
import { getTasks } from '../../redux/actions/index';

function HomePageContent({ tasks, getTasks }) {
  useEffect(() => {
    setTimeout(() => {
      getTasks();
    }, 3000);
  }, []);

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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapActionsToProps = {
  getTasks,
};

export default connect(mapStateToProps, mapActionsToProps)(HomePageContent);
