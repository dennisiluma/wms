import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Component/App';
import Login from './Component/Login'
import About from './Component/About';
import Dashboard from './Component/Dashboard';
import reportWebVitals from './reportWebVitals';
import AvailableOrders from './Component/AvailableOrders';
import InProgressOrders from './Component/InProgressOrders';
import FulfilledOrders from './Component/FulfilledOrders';
import CreateWalkInCusOrder from './Component/CreateWalkInCusOrder';
import CreateClientOrder from './Component/CreateClientOrder';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='about' element={<About />} /> {/* Here, we are nexting About component*/}
        </Route>
        <Route path='login' element={<Login />} />

        <Route path='/dashboard' element={<Dashboard />} />
          <Route path='availableOrders' element={<AvailableOrders />} />
          <Route path='inProgressOrders' element={<InProgressOrders />} />
          <Route path='fulfilledOrders' element={<FulfilledOrders />} />
          <Route path='createWalkInCusOrder' element={<CreateWalkInCusOrder />} />
          <Route path='createClientOrder' element={<CreateClientOrder />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
