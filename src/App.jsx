import "./app.scss"
import  Home from "./home/Home"
import Login from "./components/login/login"
import Register from "./components/register/Register"
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';


const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Home /> 
        </Route>
        <Route path="/register">
          <Register /> 
        </Route>
        <Route path="/login">
         <Login /> 
        </Route>

      </Switch>
    </Router>
  );
};


export default App;