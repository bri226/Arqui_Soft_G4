import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './pages/Login';
import Test from './pages/Test';
import Registro from './pages/Registro';
import UsuariosRegistrados from './pages/UsuariosRegistrados';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/test' element={<Test />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/usuariosregistrados' element={<UsuariosRegistrados />} />
        </Routes>
      </Router>

);