import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';


import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';


const App = () => {  
  return (
     <Router>
      <TemplateDefault>
        <Routes>
          <Route 
            path="/customers" 
            element={
              <TemplatePage title="Usuários" Component={Customers} /> // Aplicando templates de titulo nas paginas no component Customers
          } />
          <Route 
            path="/" 
            element={
              <TemplatePage title="Página Inicial" Component={Home} /> // Aplicando templates de titulo nas paginas no component Home
          } />
        </Routes>
      </TemplateDefault>
     </Router>
  );
}

export default App;
