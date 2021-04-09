export const getTasks = () => {
  return { type: 'GET_TASKS' };
};

export const addTask = (action) => {
  return { type: 'ADD_TASK', description: action.task };
};

export const removeTask = (action) => {
  return { type: 'REMOVE_TASK', taskId: action.taskId };
};

export const toggleIscompletedOfTask = (action) => {
  return {
    type: 'TOGGLE_ISCOMPLETED_OF_TASK',
    taskId: action.taskId,
    isCompleted: action.isCompleted,
  };
};
