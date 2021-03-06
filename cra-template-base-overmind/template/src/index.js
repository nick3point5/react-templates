import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { config, createOvermind } from 'overmind';
import { Provider } from 'overmind-react';

const overmind = createOvermind(config)

ReactDOM.render(
  <React.StrictMode>
		<Provider value={overmind}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);