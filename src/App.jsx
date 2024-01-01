<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TemplatePage from "./templates/Page";
import TemplateClean from "./templates/Clean";

import CustomersList from "./pages/Customers/List";
import CustomersRegister from "./pages/Customers/Register";
import CustomersEdit from "./pages/Customers/Edit";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import TemplateClean from './templates/Clean';
import CustomersList from './pages/Customers/List';
import CustomersRegister from './pages/Customers/Register';
import CustomersEdit from './pages/Customers/Edit';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'; // Assumindo que você tem um componente Home
>>>>>>> d19f710291b489d9897e7a4e1bf9491a730ee917

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
<<<<<<< HEAD
          element={
            <TemplateClean title="Acesso Restrito" Component={Login} /> // Aplicando templates de titulo nas paginas no component Customers
          }
        />
        <Route
          path="/customers/edit/:id"
          element={
            <TemplatePage title="Editar Cliente" Component={CustomersEdit} /> // Aplicando templates de titulo nas paginas no component Customers
          }
        />
        <Route
          path="/customers/add"
          element={
            <TemplatePage
              title="Cadastro de clientes"
              Component={CustomersRegister}
            /> // Aplicando templates de titulo nas paginas no component Customers
          }
        />
        <Route
          path="/customers"
          element={
            <TemplatePage title="Lista de clientes" Component={CustomersList} /> // Aplicando templates de titulo nas paginas no component Customers
          }
        />
        <Route
          path="/"
          element={
            <TemplatePage title="Página inicial" Component={Home} /> // Aplicando templates de titulo nas paginas no component Home
=======
          element={<TemplateClean title="Acesso Restrito" Component={Login} />}
        />
        <Route
          path="/*"
          element={
            <TemplateDefault>
              <Routes>
                <Route
                  path="/customers/edit/:id"
                  element={
                    <TemplatePage title="Editar Cliente" Component={CustomersEdit} />
                  }
                />
                <Route
                  path="/customers/add"
                  element={
                    <TemplatePage title="Cadastro de clientes" Component={CustomersRegister} />
                  }
                />
                <Route
                  path="/customers"
                  element={
                    <TemplatePage title="Lista de clientes" Component={CustomersList} />
                  }
                />
                <Route
                  path="/"
                  element={
                    <TemplatePage title="Página inicial" Component={Home} />
                  }
                />
              </Routes>
            </TemplateDefault>
>>>>>>> d19f710291b489d9897e7a4e1bf9491a730ee917
          }
        />
      </Routes>
    </Router>
  );
};

export default App;