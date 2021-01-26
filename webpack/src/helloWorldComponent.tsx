import React from 'react';
import classes from './helloWorldStyles.scss';
import logoImg from './assets/socio.jpg';

const img = document.createElement('img');
console.log(logoImg);

export const HelloWorldComponent: React.FC = () => {
  return (
    <>
      <h1 className={classes.helloWorld}>Hello World From React</h1>
      <div className={classes.imgContainer}>
        <img src={logoImg} alt="" />
      </div>
    </>
  );
};
