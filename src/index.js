import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import EmployeeList from './employeeList';
//import Period from './period';
//import Form from './period_form';
import PeriodTypeTable from './periodTypeTable';
import PeriodTypeEditForm from './periodTypeEditForm';
import PeriodTypeAddForm from './periodTypeAddForm';
import PeriodTypeScreen from './periodTypeScreen';
import EmployeeList from './employeeList';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeList/>
  </React.StrictMode>,
  document.getElementById('emp')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
