import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement); 

root.render(
  <React.StrictMode>
    <Router>
      <RoutesConfig />
    </Router>
  </React.StrictMode>
);

