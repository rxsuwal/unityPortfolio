
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Admin from './pages/Admin/Admin'
import Home from './pages/Home/Home'



function App() {
  return (
    <div className="App">
    
      <Router>
      <Switch>
          <Route path="/admin">
           <Admin/>
          </Route>
          
          <Route path="/">
            <Home/>
          </Route>
         
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
