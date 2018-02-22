import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app/app'

const container = document.createElement('div'); //creating the element
document.body.appendChild(container);//creating our container
//this is the only line that uses react-dom
ReactDom.render(<App />, container);