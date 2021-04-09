export const getTasks = () => {
  return { type: 'GET_TASKS' };
};

export const addTask = (action) => {
  return { type: 'ADD_TASK', description: action.task };
};
