const initialState = {
  tasks: [],
  isLoadingGetTasks: false,
  isErrorGetTasks: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //GET_TASKS
    case 'REQUEST_GET_TASKS':
      return { ...state, isLoadingGetTasks: true, isErrorGetTasks: false };

    case 'REQUEST_GET_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.tasks,
        isLoadingGetTasks: false,
        isErrorGetTasks: false,
      };

    case 'REQUEST_GET_TASKS_FAILED':
      return { ...state, isLoadingGetTasks: false, isErrorGetTasks: true };

    //ADD_TASK
    case 'REQUEST_ADD_TASK_SUCCESS':
      const newTasks = [...state.tasks];
      newTasks.unshift(action.task);
      return {
        ...state,
        tasks: newTasks,
      };

    case 'REQUEST_ADD_TASK_FAILED':
      return { ...state };

    default:
      return state;
  }
};
