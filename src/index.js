import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { HeroesApp } from './HeroesApp';
import 'animate.css'
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

