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
    <TemplateDefault>
     <Router>
      <Routes>
        <Route 
          path="/customers" 
          element={
            <TemplatePage title="Usuários" Component={Customers} />
        } />
        <Route 
          path="/" 
          element={
            <TemplatePage title="Página Inicial" Component={Home} />
        } />
      </Routes>
     </Router>
    </TemplateDefault>
  );
}

export default App;
