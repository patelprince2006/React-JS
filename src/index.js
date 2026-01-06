
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Functioncomponent from './Functioncomponent';
import State from './State';
import StateClass from './StateClass';
import Props from './Props';
import Props_class from './Props_class';
import Input_box from './Input_box';
import Hide_show from './Hide_show';
import Basic_form from './Basic_form';
import UseEffect from './UseEffect';
import Array from './Array';
// import Lern from './lern/Lern';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />                  {/* or  <App></App> */}
  <Functioncomponent />
    {/* <Lern /> */}
    {/* <State />
    <StateClass />

    <Props name="Patel" />
    <Props_class name="prince" />
    <Input_box />
    <Hide_show />
    <Basic_form /> */}
    {/* <UseEffect /> */}
    <Array />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
