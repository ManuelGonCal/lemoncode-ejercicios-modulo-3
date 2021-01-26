import React from 'react';
import classes from './helloWorldStyles.scss';

export const HelloWorldComponent: React.FC = () => {
  return <h1 className={classes.helloWorld}>Hello World From React</h1>;
};
