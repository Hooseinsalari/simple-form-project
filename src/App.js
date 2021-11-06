import './App.css';
import Login from './components/Login';
import SignIn from './components/SignIn';

import { Route, Switch} from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
