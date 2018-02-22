import React from 'react';
import './style/main.scss';
import './style/reset.scss';
import ReactDom from 'react-dom';
import App from './components/app/index';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<App />, container);