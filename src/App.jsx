import './styles/styles.css';
import Index from "./pages";
import Camiseta1 from "./pages/Camiseta1";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Camiseta2 from "./pages/Camiseta2";


function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/Camiseta1">
                            <Camiseta1/>
                        </Route>
                        <Route path="/Camiseta2">
                            <Camiseta2/>
                        </Route>
                        <Route path="/">
                            <Index/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
