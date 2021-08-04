import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function App() {
  return (
     <Router>  
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/forgetpassword">
            <ForgetPassword/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;
