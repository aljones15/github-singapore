import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Containers/Root/';
const bulma = require('bulma/css/bulma.css');
/***
* Creates a Container for the React App automatically
*/
function createContainer(){
  const app = document.getElementById('app');
  if(!app){
    const el = document.createElement('div');
    el.setAttribute('id', 'app');
    return document.body.insertBefore(el, document.body.firstChild);
  }
  return app;
}

ReactDOM.render(
  <Root />,
  createContainer()
);
