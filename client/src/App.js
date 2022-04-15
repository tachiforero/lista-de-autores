import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Editar from './views/MainAutores';
import Mainautores from './views/MainAutores';
import Anadir from './views/Anadir';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Mainautores></Mainautores>}>
          </Route>

          <Route path="/new" element= {<Anadir></Anadir>}>
          </Route>
          
          <Route exact path="/edit/:id" element= {<Edit></Edit>}>
            
          </Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
