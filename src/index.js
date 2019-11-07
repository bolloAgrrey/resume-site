import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}
serviceWorker.unregister();
