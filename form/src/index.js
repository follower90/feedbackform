import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

const config = window.feedbackConfig;

ReactDOM.render(
	<App {...config} />,
	document.querySelector(config.element)
);
