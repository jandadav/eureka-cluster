import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'mineral-ui/themes';
import './index.css';
import App from './components/App/App';

console.log(process.env.NODE_ENV);
console.log("Backend: "+process.env.REACT_APP_BACKEND_URL);

ReactDOM.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
    
    ,document.getElementById('root')
);
