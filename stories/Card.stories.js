import React from 'react';

//components
import TaskCardComponent from '../components/TaskCard/index';

export default {
  title: 'Cards',
};

const task = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isCompleted: false,
  created_at: new Date('2020-11-01T15:10:18.164+00:00'),
};

export const TaskCard = () => <TaskCardComponent task={task} />;
