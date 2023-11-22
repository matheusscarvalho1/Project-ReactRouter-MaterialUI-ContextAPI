import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';


import CustomersList from './pages/Customers/List';
import CustomersRegister from './pages/Customers/Register';
import Home from './pages/Home/Home';


const App = () => {  
  return (
     <Router>
      <TemplateDefault>
        <Routes>
          <Route 
            path="/customers/add" 
            element={
              <TemplatePage title="Cadastro de clientes" Component={CustomersRegister} /> // Aplicando templates de titulo nas paginas no component Customers
          } />
          <Route 
            path="/customers" 
            element={
              <TemplatePage title="Lista de clientes" Component={CustomersList} /> // Aplicando templates de titulo nas paginas no component Customers
          } />
          <Route 
            path="/" 
            element={
              <TemplatePage title="Página inicial" Component={Home} /> // Aplicando templates de titulo nas paginas no component Home
          } />
        </Routes>
      </TemplateDefault>
     </Router>
  );
}

export default App;
