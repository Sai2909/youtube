import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
import reportWebVitals from './reportWebVitals';
// import Tabs from './tabs/Tabs';
import FillExample from './tabs/Tabs';
// import Main from './advance_routing/Main';
// import GetExample1 from './api/GetExample1';
// import Main from './Routing/Main';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FillExample/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
