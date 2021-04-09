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

    default:
      return state;
  }
};
