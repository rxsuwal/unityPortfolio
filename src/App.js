
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import Admin from './pages/Admin/Admin'
import Home from './pages/Home/Home'

import {connect} from 'react-redux'
import * as actionCreator from './store/actions/actionCreators/index'
import { useEffect } from 'react';


function App(props) {

  useEffect(() => {
    props.onAuthIn()
  }, [])

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

const mapDispatchToProps = dispatch =>{

  return{
    onAuthIn:()=>dispatch(actionCreator.authCheckState())
  }

}

export default connect(null,mapDispatchToProps)(App);
