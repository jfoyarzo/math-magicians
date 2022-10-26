import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const ChangeTitle = () => {
  useEffect(() => {
    document.title = 'Math Magicians';
  });
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeTitle />
    <App />
  </React.StrictMode>,
);
