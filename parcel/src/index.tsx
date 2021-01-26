import React from 'react';
import ReactDOM from 'react-dom';
import { HelloComponent } from './hello';
import dotenv from 'dotenv';
import './myStyles.scss';

dotenv.config();

console.log(`el secreto es: ${process.env.SECRETO}`);

ReactDOM.render(<HelloComponent />, document.getElementById('root'));
