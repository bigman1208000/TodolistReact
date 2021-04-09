import { createSelector } from 'reselect';

const taskSelector = (state) => state;

const completedTaskSelector = createSelector(taskSelector, (tasks) =>
  tasks.filter((task) => task.isCompleted),
);

const incompletedTaskSelector = createSelector(taskSelector, (tasks) =>
  tasks.filter((task) => !task.isCompleted),
);

export { completedTaskSelector, incompletedTaskSelector };
