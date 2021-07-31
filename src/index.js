import React from 'react';
import ReactDOM from 'react-dom';
import { FrontEnd } from './FrontEnd';
import './styles/styles.scss';
import 'animate.css';
console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
    <FrontEnd />,
  document.getElementById('root')
);

