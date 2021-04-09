const initialState = {
  tasks: [],
  isLoadingGetTasks: false,
  isErrorGetTasks: false,
};

export const reducer = (state = initialState, action) => {
  //caselerde kullanıyorum
  let newTasks;

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
      newTasks = [...state.tasks];
      newTasks.unshift(action.task);
      return {
        ...state,
        tasks: newTasks,
      };

    case 'REQUEST_ADD_TASK_FAILED':
      return { ...state };

    //REMOVE_TASK
    case 'REQUEST_REMOVE_TASK_SUCCESS':
      const taskIndex = state.tasks.findIndex(
        (task) => task._id === action.taskId,
      );
      newTasks = [...state.tasks];
      newTasks.splice(taskIndex, 1);

      return { ...state, tasks: newTasks };

    case 'REQUEST_REMOVE_TASK_FAILED':
      return { ...state };

    default:
      return state;
  }
};
