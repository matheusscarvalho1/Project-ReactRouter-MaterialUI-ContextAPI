import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TemplatePage from "./templates/Page";
import TemplateClean from "./templates/Clean";

import CustomersList from "./pages/Customers/List";
import CustomersRegister from "./pages/Customers/Register";
import CustomersEdit from "./pages/Customers/Edit";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
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
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
