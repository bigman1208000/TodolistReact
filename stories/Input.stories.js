import React from 'react';

//components
import AddTaskTextInputComponent from '../components/AddTaskTextInput/index';
import AddTaskBarComponent from '../components/AddTaskBar/index';

export default {
  title: 'Inputs',
};

export const AddTaskTextInput = () => <AddTaskTextInputComponent />;
export const AddTask = () => <AddTaskBarComponent />;
