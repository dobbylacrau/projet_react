import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Application';
import registerServiceWorker from './registerServiceWorker';

import {
	Provider
} from "react-redux";

import configureStore from './services';

const store = configureStore({

});


const Application = (props) => (
	<Provider store={store}>
			<App/>
	</Provider>
)


ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();