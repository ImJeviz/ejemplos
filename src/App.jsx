import './styles/styles.css';
import Index from "./pages";
import Camiseta1 from "./pages/Camiseta1";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/Camiseta1">
                  <Camiseta1></Camiseta1>
              </Route>
              <Route path="/">
                <Index></Index>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
