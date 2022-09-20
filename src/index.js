import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Launch from './components/launch';
import Redirect from './components/redirect';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
          <Route path="launch" element={<Launch/>} />
          <Route path="redirect" element={<Redirect/>} />
      </Routes>
    </BrowserRouter>
    </>
);

reportWebVitals();
