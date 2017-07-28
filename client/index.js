import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
// import VAPID from './../private/vapid.json';

import 'file-loader?name=./img/launcher-icon-1x.png!./img/launcher-icon-1x.png';
import 'file-loader?name=./img/launcher-icon-2x.png!./img/launcher-icon-2x.png';
import 'file-loader?name=./img/launcher-icon-4x.png!./img/launcher-icon-4x.png';
import 'file-loader?name=./apple-touch-icon-57x57.png!./img/apple-touch-icon-57x57.png';
import 'file-loader?name=./apple-touch-icon-60x60.png!./img/apple-touch-icon-60x60.png';
import 'file-loader?name=./apple-touch-icon-72x72.png!./img/apple-touch-icon-72x72.png';
import 'file-loader?name=./apple-touch-icon-76x76.png!./img/apple-touch-icon-76x76.png';
import 'file-loader?name=./apple-touch-icon-114x114.png!./img/apple-touch-icon-114x114.png';
import 'file-loader?name=./apple-touch-icon-120x120.png!./img/apple-touch-icon-120x120.png';
import 'file-loader?name=./apple-touch-icon-144x144.png!./img/apple-touch-icon-144x144.png';
import 'file-loader?name=./apple-touch-icon-152x152.png!./img/apple-touch-icon-152x152.png';
import 'worker-loader?name=./apple-touch-icon-180x180.png!./img/apple-touch-icon-180x180.png';

import 'worker-loader?name=./qr-worker.js!./qr-worker.js';

// added to get webpack to generate file via fileloader
import 'file-loader?name=./web-app-manifest.json!./web-app-manifest.json';

import 'file-loader?name=./web-app-manifest.json!./web-app-manifest.json';
import 'worker-loader?name=./qr-worker.js!./qr-worker.js';
import 'worker-loader?name=./sw.js!./sw.js';

ReactDOM.render((<App />), document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('REGISTERED!!!');
  });
}