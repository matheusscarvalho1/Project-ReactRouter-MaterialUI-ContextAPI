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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
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
          }
        />
      </Routes>
    </Router>
  );
};

export default App;