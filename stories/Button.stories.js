import React from 'react';

//components
import NavigationButtonComponent from '../components/NavigationButton/index';
import NavigationComponent from '../components/Navigation/index';
import LogoComponent from '../components/Logo/index';

export default {
  title: 'Buttons',
};

export const NavigationCompleted = () => (
  <NavigationButtonComponent type="completed" />
);

export const NavigationIncompleted = () => (
  <NavigationButtonComponent type="incompleted" selected />
);

export const Navigation = () => (
  <NavigationComponent selectedPage="completed" />
);

export const Logo = () => <LogoComponent />;
