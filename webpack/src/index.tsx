import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './helloWorldComponent';

console.log(`el zecreto es: ${process.env.SECRETO}`);

ReactDOM.render(
  <div>
    <HelloWorldComponent />
  </div>,
  document.getElementById('root')
);
