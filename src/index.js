import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/create' element={<CreateEmployee />} />
      <Route path='/list' element={<EmployeeList />} />
      <Route path="/edit/:id" element={<CreateEmployee update={true} />} />
      <Route path="/list/:id" element={<EmployeeDetails />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
