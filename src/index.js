import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //React.StrictMode займається перевіркою коду
  // <React.StrictMode>

    //BrowserRouter - це компонент, який використовується в React Router для
    //обгортання вашого додатку та забезпечення маршрутизації на основі URL-адреси в браузері.

//Коли ви обгортаєте ваш додаток в <BrowserRouter>, React Router
//забезпечує спосіб визначення, які компоненти відображати залежно від поточного шляху URL-адреси.
    <BrowserRouter>
    <App />
    </BrowserRouter>
    // </React.StrictMode>
);


