import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpets from './views/MainPets';
import Anadir from './views/Anadir';
import Edit from './views/Edit';
import Detalle from './views/Detalle';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Mainpets></Mainpets>}></Route>

          <Route path="/new" element= {<Anadir></Anadir>}></Route>
          
          <Route path="/detalles/:id" element= {<Detalle/>}></Route>

          <Route exact path="/edit/:id" element= {<Edit></Edit>}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
