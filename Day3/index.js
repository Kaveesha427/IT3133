import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Name from './Name';

import Headers from './Components/Headers';
import Body from './Components/Body';
import Logo from './Components/Logo';
import Footer from './Components/Footer';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Logo />
    <Headers />
    <Body content="Hello react" title="Learn"/>
    <Footer />
   
    
    
   
    
  </React.StrictMode>
);<Headers />
   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
