import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

// Устаревшая запись

// const span = React.createElement('span', { }, 'Im span')
// const element = React.createElement('h1', {
// className: 'my-class',
// }, span)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


